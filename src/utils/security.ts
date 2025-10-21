/**
 * Advanced Security Utilities
 * Additional security features for enhanced protection
 */

/**
 * Honeypot field checker
 * If honeypot field has value, it's likely a bot
 */
export const isHoneypotFilled = (honeypotValue: string): boolean => {
  return honeypotValue !== null && honeypotValue !== undefined && honeypotValue.trim() !== '';
};

/**
 * Check if email is from a disposable email provider
 * Common disposable email domains to block
 */
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com', 'guerrillamail.com', '10minutemail.com', 'throwaway.email',
  'mailinator.com', 'trashmail.com', 'yopmail.com', 'maildrop.cc',
  'sharklasers.com', 'guerrillamail.info', 'grr.la', 'guerrillamail.biz',
  'spam4.me', 'mailnesia.com', 'temp-mail.org', 'getnada.com',
  'fakeinbox.com', 'emailondeck.com', 'mintemail.com', 'mytemp.email',
  'mohmal.com', 'rootfest.net', 'discard.email', 'discardmail.com'
];

export const isDisposableEmail = (email: string): boolean => {
  if (!email) return false;
  
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  
  return DISPOSABLE_EMAIL_DOMAINS.includes(domain);
};

/**
 * Detect bot-like behavior based on timing
 * Humans typically take at least 2-3 seconds to fill a form
 */
export const detectBotTiming = (formStartTime: number): boolean => {
  const formDuration = Date.now() - formStartTime;
  const MIN_HUMAN_TIME = 2000; // 2 seconds minimum
  
  return formDuration < MIN_HUMAN_TIME;
};

/**
 * Security event logger
 * Logs security events for monitoring
 */
export interface SecurityEvent {
  type: 'rate_limit' | 'honeypot' | 'disposable_email' | 'bot_timing' | 'xss_attempt' | 'validation_error';
  timestamp: number;
  details?: string;
  userAgent?: string;
}

export const logSecurityEvent = (event: SecurityEvent): void => {
  const logEntry = {
    ...event,
    timestamp: event.timestamp || Date.now(),
    userAgent: event.userAgent || navigator.userAgent,
  };
  
  // Log to console in development
  if (import.meta.env.DEV) {
    console.warn('🔒 Security Event:', logEntry);
  }
  
  // Store in localStorage for analysis (last 100 events)
  try {
    const storageKey = 'security_events';
    const stored = localStorage.getItem(storageKey);
    const events: SecurityEvent[] = stored ? JSON.parse(stored) : [];
    
    events.push(logEntry);
    
    // Keep only last 100 events
    const recentEvents = events.slice(-100);
    localStorage.setItem(storageKey, JSON.stringify(recentEvents));
    
    // TODO: In production, send to analytics/monitoring service
    // Example: sendToSentry(logEntry);
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
};

/**
 * Get all security events from storage
 */
export const getSecurityEvents = (): SecurityEvent[] => {
  try {
    const stored = localStorage.getItem('security_events');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

/**
 * Clear security event logs
 */
export const clearSecurityEvents = (): void => {
  try {
    localStorage.removeItem('security_events');
  } catch (error) {
    console.error('Failed to clear security events:', error);
  }
};

/**
 * Check if user is using a VPN/Proxy (basic detection)
 * This is a simple check - for production use a dedicated service
 */
export const detectVPN = (): boolean => {
  // Check for common VPN indicators in timezone vs locale mismatch
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language;
    
    // Basic heuristic - if timezone is generic (like UTC), might be VPN
    // This is NOT foolproof, just a basic indicator
    return timezone === 'UTC' || timezone === 'Etc/UTC';
  } catch {
    return false;
  }
};

/**
 * Generate CSRF token
 * Use for protecting state-changing operations
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate CSRF token
 */
export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken && token.length === 64;
};

/**
 * Store CSRF token in session storage
 */
export const storeCSRFToken = (token: string): void => {
  try {
    sessionStorage.setItem('csrf_token', token);
  } catch (error) {
    console.error('Failed to store CSRF token:', error);
  }
};

/**
 * Retrieve CSRF token from session storage
 */
export const getCSRFToken = (): string | null => {
  try {
    return sessionStorage.getItem('csrf_token');
  } catch {
    return null;
  }
};

/**
 * Enhanced XSS detection
 * Detects potential XSS patterns in user input
 */
export const detectXSSPatterns = (input: string): boolean => {
  if (!input) return false;
  
  const xssPatterns = [
    /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /eval\(/gi,
    /expression\(/gi,
    /vbscript:/gi,
    /onload=/gi,
    /onerror=/gi,
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * SQL Injection detection (basic)
 * Detects potential SQL injection patterns
 */
export const detectSQLInjection = (input: string): boolean => {
  if (!input) return false;
  
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(union\s+select)/gi,
    /(or\s+1\s*=\s*1)/gi,
    /(and\s+1\s*=\s*1)/gi,
    /'?\s*or\s*'?\s*'?\s*=\s*'?/gi,
    /--/g,
    /;.*?drop/gi,
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
};

/**
 * Comprehensive security check for user input
 */
export interface SecurityCheckResult {
  safe: boolean;
  threats: string[];
}

export const performSecurityCheck = (input: string): SecurityCheckResult => {
  const threats: string[] = [];
  
  if (detectXSSPatterns(input)) {
    threats.push('XSS attempt detected');
    logSecurityEvent({ type: 'xss_attempt', timestamp: Date.now(), details: 'XSS pattern detected' });
  }
  
  if (detectSQLInjection(input)) {
    threats.push('SQL injection attempt detected');
    logSecurityEvent({ type: 'xss_attempt', timestamp: Date.now(), details: 'SQL injection pattern detected' });
  }
  
  return {
    safe: threats.length === 0,
    threats
  };
};

/**
 * Check if user interaction seems legitimate
 * Combines multiple bot detection methods
 */
export interface BotDetectionResult {
  isLikelyBot: boolean;
  reasons: string[];
  score: number; // 0-100, higher = more likely bot
}

export const detectBot = (params: {
  honeypotValue?: string;
  formStartTime?: number;
  email?: string;
}): BotDetectionResult => {
  const reasons: string[] = [];
  let score = 0;
  
  // Check honeypot
  if (params.honeypotValue && isHoneypotFilled(params.honeypotValue)) {
    reasons.push('Honeypot field filled');
    score += 70;
  }
  
  // Check timing
  if (params.formStartTime && detectBotTiming(params.formStartTime)) {
    reasons.push('Form filled too quickly');
    score += 40;
  }
  
  // Check disposable email
  if (params.email && isDisposableEmail(params.email)) {
    reasons.push('Disposable email detected');
    score += 30;
  }
  
  // Check VPN (low confidence indicator)
  if (detectVPN()) {
    reasons.push('VPN/Proxy detected');
    score += 10;
  }
  
  return {
    isLikelyBot: score >= 50,
    reasons,
    score: Math.min(score, 100)
  };
};

/**
 * Secure data comparison (prevents timing attacks)
 * Use for comparing passwords, tokens, etc.
 */
export const secureCompare = (a: string, b: string): boolean => {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
};

/**
 * Generate secure random string
 */
export const generateSecureRandomString = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').substring(0, length);
};

/**
 * Check if request origin is allowed
 */
export const isAllowedOrigin = (origin: string): boolean => {
  const allowedOrigins = [
    'https://automate-hub.com',
    'https://www.automate-hub.com',
    'http://localhost:5173', // Development
    'http://localhost:4173', // Preview
  ];
  
  return allowedOrigins.includes(origin);
};

/**
 * Sanitize filename to prevent directory traversal
 */
export const sanitizeFilename = (filename: string): string => {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_') // Replace unsafe chars
    .replace(/\.{2,}/g, '.') // Remove multiple dots
    .substring(0, 255); // Limit length
};

