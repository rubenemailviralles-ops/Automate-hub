/**
 * Invisible Security Utilities
 * 
 * This file contains security functions that work behind the scenes
 * to protect your website without any visual changes.
 */

// Rate limiting configuration
const RATE_LIMITS = {
  contactForm: { maxRequests: 5, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  consultationForm: { maxRequests: 3, windowMs: 15 * 60 * 1000 }, // 3 requests per 15 minutes
  analytics: { maxRequests: 100, windowMs: 60 * 1000 }, // 100 requests per minute
};

// Security event types
export const SECURITY_EVENTS = {
  RATE_LIMIT_EXCEEDED: 'rate_limit_exceeded',
  SUSPICIOUS_ACTIVITY: 'suspicious_activity',
  FORM_SPAM: 'form_spam',
  INVALID_REQUEST: 'invalid_request',
  BOT_DETECTED: 'bot_detected'
} as const;

/**
 * Check if request is from a bot
 */
export const isBot = (userAgent: string): boolean => {
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i, /curl/i, /wget/i,
    /python/i, /java/i, /php/i, /go-http/i, /okhttp/i,
    /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,
    /whatsapp/i, /telegrambot/i, /slackbot/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
};

/**
 * Check if IP is suspicious based on patterns
 */
export const isSuspiciousIP = (ip: string): boolean => {
  // Check for common VPN/proxy patterns
  const suspiciousPatterns = [
    /^10\./, /^192\.168\./, /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // Private IPs
    /^127\./, /^::1$/, /^localhost$/i // Localhost
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(ip));
};

/**
 * Validate form input for security
 */
export const validateFormInput = (input: string): { isValid: boolean; sanitized: string } => {
  // Remove potentially dangerous characters
  const sanitized = input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/<iframe\b[^>]*>/gi, '') // Remove iframes
    .replace(/<object\b[^>]*>/gi, '') // Remove objects
    .replace(/<embed\b[^>]*>/gi, '') // Remove embeds
    .trim();
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script/i, /javascript:/i, /vbscript:/i, /onload=/i, /onerror=/i,
    /eval\(/i, /expression\(/i, /url\(/i, /@import/i
  ];
  
  const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(input));
  
  return {
    isValid: !hasSuspiciousContent && sanitized.length > 0,
    sanitized
  };
};

/**
 * Rate limiting check
 */
export const checkRateLimit = async (endpoint: string, ip: string): Promise<boolean> => {
  try {
    const key = `rate_limit_${endpoint}_${ip}`;
    const stored = localStorage.getItem(key);
    const now = Date.now();
    
    if (stored) {
      const data = JSON.parse(stored);
      const windowStart = data.windowStart;
      const requestCount = data.count;
      const limit = RATE_LIMITS[endpoint as keyof typeof RATE_LIMITS];
      
      if (limit) {
        // Check if we're still in the same window
        if (now - windowStart < limit.windowMs) {
          if (requestCount >= limit.maxRequests) {
            // Log rate limit exceeded
            await logSecurityEvent(SECURITY_EVENTS.RATE_LIMIT_EXCEEDED, {
              endpoint,
              ip,
              requestCount,
              limit: limit.maxRequests
            });
            return false;
          }
          // Increment count
          localStorage.setItem(key, JSON.stringify({
            windowStart,
            count: requestCount + 1
          }));
        } else {
          // New window
          localStorage.setItem(key, JSON.stringify({
            windowStart: now,
            count: 1
          }));
        }
      }
    } else {
      // First request
      localStorage.setItem(key, JSON.stringify({
        windowStart: now,
        count: 1
      }));
    }
    
    return true;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow request if rate limiting fails
  }
};

/**
 * Log security events (invisible to users)
 */
export const logSecurityEvent = async (eventType: string, details: Record<string, any>): Promise<void> => {
  try {
    // Get user info
    const userAgent = navigator.userAgent;
    const ip = await getClientIP();
    
    // Check for suspicious activity
    if (isBot(userAgent)) {
      await logToSupabase(SECURITY_EVENTS.BOT_DETECTED, ip, userAgent, details);
    }
    
    if (isSuspiciousIP(ip)) {
      await logToSupabase(SECURITY_EVENTS.SUSPICIOUS_ACTIVITY, ip, userAgent, details);
    }
    
    // Log the main event
    await logToSupabase(eventType, ip, userAgent, details);
  } catch (error) {
    console.error('Security logging failed:', error);
  }
};

/**
 * Get client IP (approximate)
 */
const getClientIP = async (): Promise<string> => {
  try {
    // Use a service to get IP (invisible to users)
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'unknown';
  } catch {
    return 'unknown';
  }
};

/**
 * Log to Supabase (invisible)
 */
const logToSupabase = async (eventType: string, ip: string, userAgent: string, details: Record<string, any>): Promise<void> => {
  try {
    // Try to log to security_events table (may not exist yet)
    const { createClient } = await import('../lib/supabase');
    const supabase = createClient();
    
    await supabase.from('security_events').insert({
      event_type: eventType,
      ip_address: ip,
      user_agent: userAgent,
      details: details,
      created_at: new Date().toISOString()
    });
  } catch (error) {
    // Security tables don't exist yet - log to console
    console.log('Security Event:', {
      eventType,
      ip,
      userAgent,
      details,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate phone number format
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

/**
 * Sanitize text input
 */
export const sanitizeText = (text: string): string => {
  return text
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
    .substring(0, 1000); // Limit length
};

/**
 * Check for form spam patterns
 */
export const detectSpam = (formData: Record<string, string>): boolean => {
  const spamPatterns = [
    /viagra/i, /casino/i, /poker/i, /loan/i, /debt/i,
    /free money/i, /click here/i, /buy now/i, /act now/i,
    /limited time/i, /guaranteed/i, /no risk/i
  ];
  
  const allText = Object.values(formData).join(' ').toLowerCase();
  
  return spamPatterns.some(pattern => pattern.test(allText));
};

/**
 * Generate secure form token (invisible)
 */
export const generateFormToken = (): string => {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2);
  return btoa(timestamp + random).replace(/[^a-zA-Z0-9]/g, '');
};

/**
 * Validate form token
 */
export const validateFormToken = (token: string): boolean => {
  try {
    const decoded = atob(token);
    const timestamp = parseInt(decoded.substring(0, 13));
    const now = Date.now();
    
    // Token valid for 1 hour
    return (now - timestamp) < 3600000;
  } catch {
    return false;
  }
};