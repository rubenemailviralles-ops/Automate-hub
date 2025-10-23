/**
 * Invisible Security Middleware
 * 
 * This file provides comprehensive security middleware
 * that runs behind the scenes to protect your website.
 */

import { logSecurityEvent, SECURITY_EVENTS } from './security';

// Security configuration
const SECURITY_CONFIG = {
  maxRequestsPerMinute: 60,
  maxRequestsPerHour: 1000,
  suspiciousActivityThreshold: 10,
  botDetectionEnabled: true,
  rateLimitEnabled: true,
  spamDetectionEnabled: true
};

// Track requests per IP
const requestTracker = new Map<string, {
  requests: number;
  lastRequest: number;
  suspiciousCount: number;
}>();

/**
 * Security middleware that runs on every request
 */
export const securityMiddleware = async (requestInfo: {
  url: string;
  method: string;
  userAgent: string;
  ip?: string;
  referrer?: string;
}): Promise<{
  allowed: boolean;
  reason?: string;
}> => {
  const { url, method, userAgent, ip = 'unknown', referrer } = requestInfo;
  
  try {
    // 1. Bot Detection
    if (SECURITY_CONFIG.botDetectionEnabled) {
      const isBot = detectBot(userAgent);
      if (isBot) {
        await logSecurityEvent(SECURITY_EVENTS.BOT_DETECTED, {
          url,
          userAgent,
          ip,
          method
        });
        return { allowed: false, reason: 'Bot detected' };
      }
    }

    // 2. Rate Limiting
    if (SECURITY_CONFIG.rateLimitEnabled) {
      const rateLimitResult = checkRateLimit(ip, url);
      if (!rateLimitResult.allowed) {
        await logSecurityEvent(SECURITY_EVENTS.RATE_LIMIT_EXCEEDED, {
          url,
          ip,
          userAgent,
          reason: rateLimitResult.reason
        });
        return { allowed: false, reason: rateLimitResult.reason };
      }
    }

    // 3. Suspicious Activity Detection
    const suspiciousActivity = detectSuspiciousActivity(ip, url, userAgent);
    if (suspiciousActivity.detected) {
      await logSecurityEvent(SECURITY_EVENTS.SUSPICIOUS_ACTIVITY, {
        url,
        ip,
        userAgent,
        reason: suspiciousActivity.reason
      });
      
      if (suspiciousActivity.block) {
        return { allowed: false, reason: suspiciousActivity.reason };
      }
    }

    // 4. URL Security Check
    const urlSecurity = checkUrlSecurity(url);
    if (!urlSecurity.safe) {
      await logSecurityEvent(SECURITY_EVENTS.INVALID_REQUEST, {
        url,
        ip,
        userAgent,
        reason: urlSecurity.reason
      });
      return { allowed: false, reason: urlSecurity.reason };
    }

    // 5. Update tracking
    updateRequestTracking(ip, url);

    return { allowed: true };
  } catch (error) {
    console.error('Security middleware error:', error);
    // Allow request if security check fails
    return { allowed: true };
  }
};

/**
 * Detect bot traffic
 */
const detectBot = (userAgent: string): boolean => {
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i, /curl/i, /wget/i,
    /python/i, /java/i, /php/i, /go-http/i, /okhttp/i,
    /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,
    /whatsapp/i, /telegrambot/i, /slackbot/i, /googlebot/i,
    /bingbot/i, /yandexbot/i, /baiduspider/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
};

/**
 * Check rate limiting
 */
const checkRateLimit = (ip: string, url: string): {
  allowed: boolean;
  reason?: string;
} => {
  const now = Date.now();
  const tracker = requestTracker.get(ip);
  
  if (!tracker) {
    requestTracker.set(ip, {
      requests: 1,
      lastRequest: now,
      suspiciousCount: 0
    });
    return { allowed: true };
  }

  const timeDiff = now - tracker.lastRequest;
  
  // Reset counter if more than 1 minute has passed
  if (timeDiff > 60000) {
    tracker.requests = 1;
    tracker.lastRequest = now;
    return { allowed: true };
  }

  // Check rate limits
  if (tracker.requests > SECURITY_CONFIG.maxRequestsPerMinute) {
    return { 
      allowed: false, 
      reason: 'Rate limit exceeded' 
    };
  }

  tracker.requests++;
  return { allowed: true };
};

/**
 * Detect suspicious activity
 */
const detectSuspiciousActivity = (ip: string, url: string, userAgent: string): {
  detected: boolean;
  block: boolean;
  reason?: string;
} => {
  const tracker = requestTracker.get(ip);
  
  if (!tracker) {
    return { detected: false, block: false };
  }

  // Check for rapid requests
  const now = Date.now();
  const timeDiff = now - tracker.lastRequest;
  
  if (timeDiff < 1000 && tracker.requests > 10) { // Less than 1 second, more than 10 requests
    tracker.suspiciousCount++;
    return {
      detected: true,
      block: tracker.suspiciousCount > 3,
      reason: 'Rapid requests detected'
    };
  }

  // Check for suspicious URLs
  const suspiciousPatterns = [
    /\.\.\//, // Directory traversal
    /<script/i, // Script injection
    /javascript:/i, // JavaScript protocol
    /eval\(/i, // Eval function
    /admin/i, // Admin access attempts
    /wp-admin/i, // WordPress admin
    /phpmyadmin/i, // phpMyAdmin
    /\.env/i, // Environment files
    /config/i, // Config files
    /\.sql/i, // SQL files
    /\.bak/i // Backup files
  ];

  const hasSuspiciousUrl = suspiciousPatterns.some(pattern => pattern.test(url));
  if (hasSuspiciousUrl) {
    tracker.suspiciousCount++;
    return {
      detected: true,
      block: true,
      reason: 'Suspicious URL detected'
    };
  }

  // Check for suspicious user agent
  const suspiciousUserAgents = [
    /sqlmap/i, /nikto/i, /nmap/i, /masscan/i, /zap/i,
    /burp/i, /w3af/i, /havij/i, /sqlninja/i
  ];

  const hasSuspiciousUserAgent = suspiciousUserAgents.some(pattern => pattern.test(userAgent));
  if (hasSuspiciousUserAgent) {
    tracker.suspiciousCount++;
    return {
      detected: true,
      block: true,
      reason: 'Suspicious user agent detected'
    };
  }

  return { detected: false, block: false };
};

/**
 * Check URL security
 */
const checkUrlSecurity = (url: string): {
  safe: boolean;
  reason?: string;
} => {
  try {
    const urlObj = new URL(url);
    
    // Check for malicious protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { safe: false, reason: 'Invalid protocol' };
    }

    // Check for suspicious paths
    const suspiciousPaths = [
      '/admin', '/wp-admin', '/phpmyadmin', '/.env',
      '/config', '/backup', '/.git', '/.svn',
      '/api/v1/admin', '/api/admin', '/admin/api'
    ];

    const hasSuspiciousPath = suspiciousPaths.some(path => 
      urlObj.pathname.toLowerCase().includes(path.toLowerCase())
    );

    if (hasSuspiciousPath) {
      return { safe: false, reason: 'Suspicious path detected' };
    }

    // Check for suspicious query parameters
    const suspiciousParams = ['cmd', 'exec', 'eval', 'system', 'shell'];
    const hasSuspiciousParam = suspiciousParams.some(param => 
      urlObj.searchParams.has(param)
    );

    if (hasSuspiciousParam) {
      return { safe: false, reason: 'Suspicious parameter detected' };
    }

    return { safe: true };
  } catch (error) {
    return { safe: false, reason: 'Invalid URL format' };
  }
};

/**
 * Update request tracking
 */
const updateRequestTracking = (ip: string, url: string): void => {
  const tracker = requestTracker.get(ip);
  if (tracker) {
    tracker.lastRequest = Date.now();
  }
};

/**
 * Clean up old tracking data
 */
export const cleanupSecurityData = (): void => {
  const now = Date.now();
  const oneHourAgo = now - (60 * 60 * 1000);
  
  for (const [ip, tracker] of requestTracker.entries()) {
    if (tracker.lastRequest < oneHourAgo) {
      requestTracker.delete(ip);
    }
  }
};

/**
 * Get security statistics
 */
export const getSecurityStats = (): {
  totalRequests: number;
  blockedRequests: number;
  suspiciousIPs: number;
  topIPs: Array<{ ip: string; requests: number }>;
} => {
  const totalRequests = Array.from(requestTracker.values())
    .reduce((sum, tracker) => sum + tracker.requests, 0);
  
  const blockedRequests = Array.from(requestTracker.values())
    .reduce((sum, tracker) => sum + tracker.suspiciousCount, 0);
  
  const suspiciousIPs = Array.from(requestTracker.entries())
    .filter(([_, tracker]) => tracker.suspiciousCount > 0).length;
  
  const topIPs = Array.from(requestTracker.entries())
    .map(([ip, tracker]) => ({ ip, requests: tracker.requests }))
    .sort((a, b) => b.requests - a.requests)
    .slice(0, 10);

  return {
    totalRequests,
    blockedRequests,
    suspiciousIPs,
    topIPs
  };
};

/**
 * Initialize security middleware
 */
export const initializeSecurityMiddleware = (): void => {
  // Clean up old data every hour
  setInterval(cleanupSecurityData, 60 * 60 * 1000);
  
  // Log security stats every 24 hours
  setInterval(() => {
    const stats = getSecurityStats();
    console.log('Security Stats:', stats);
  }, 24 * 60 * 60 * 1000);
};
