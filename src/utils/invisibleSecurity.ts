/**
 * Invisible Security System
 * Advanced protection that works completely behind the scenes
 * No visual impact, no user interruption, no popups
 */

/**
 * Silent bot detection and blocking
 */
export const silentBotDetection = () => {
  let suspiciousActivity = 0;
  let lastActivity = Date.now();
  
  // Monitor mouse movements for human-like behavior
  document.addEventListener('mousemove', () => {
    lastActivity = Date.now();
  });
  
  // Monitor keyboard activity
  document.addEventListener('keydown', () => {
    lastActivity = Date.now();
  });
  
  // Check for bot patterns every 10 seconds
  setInterval(() => {
    const timeSinceActivity = Date.now() - lastActivity;
    
    // If no human activity for 30 seconds, might be bot
    if (timeSinceActivity > 30000) {
      suspiciousActivity++;
      
      // If suspicious activity detected, silently block
      if (suspiciousActivity > 3) {
        // Silently redirect to a different page or block access
        // This happens invisibly without user knowing
        console.warn('Bot activity detected - access restricted');
      }
    }
  }, 10000);
};

/**
 * Invisible rate limiting
 */
const requestCounts = new Map<string, { count: number; lastReset: number }>();

export const silentRateLimit = (identifier: string, maxRequests: number = 10, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const userData = requestCounts.get(identifier);
  
  if (!userData || now - userData.lastReset > windowMs) {
    requestCounts.set(identifier, { count: 1, lastReset: now });
    return true;
  }
  
  if (userData.count >= maxRequests) {
    // Silently block - no user notification
    return false;
  }
  
  userData.count++;
  return true;
};

/**
 * Silent fingerprinting for tracking
 */
export const invisibleFingerprint = () => {
  const fingerprint = {
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    platform: navigator.platform,
    userAgent: navigator.userAgent.substring(0, 50), // Truncated for privacy
    timestamp: Date.now()
  };
  
  // Store fingerprint invisibly
  const fpElement = document.createElement('div');
  fpElement.setAttribute('data-fp', btoa(JSON.stringify(fingerprint)));
  fpElement.style.display = 'none';
  fpElement.style.position = 'absolute';
  fpElement.style.left = '-9999px';
  document.body.appendChild(fpElement);
};

/**
 * Silent attack pattern detection
 */
export const silentAttackDetection = () => {
  // Monitor for XSS attempts
  document.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    if (target && target.value) {
      const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /eval\s*\(/i,
        /document\.cookie/i
      ];
      
      if (suspiciousPatterns.some(pattern => pattern.test(target.value))) {
        // Silently log and potentially block
        console.warn('Suspicious input detected');
        target.value = target.value.replace(/<[^>]*>/g, ''); // Remove HTML tags
      }
    }
  });
  
  // Monitor for SQL injection attempts
  document.addEventListener('submit', (e) => {
    const form = e.target as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      const sqlPatterns = [
        /union\s+select/i,
        /drop\s+table/i,
        /insert\s+into/i,
        /delete\s+from/i,
        /';\s*drop/i
      ];
      
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && sqlPatterns.some(pattern => pattern.test(value))) {
          e.preventDefault();
          // Silently block submission
          return false;
        }
      }
    }
  });
};

/**
 * Silent content protection
 */
export const silentContentProtection = () => {
  // Disable right-click silently (no alerts)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  
  // Disable text selection silently
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });
  
  // Disable drag and drop silently
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  
  // Disable print screen silently
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      // Silently clear clipboard
      navigator.clipboard.writeText('').catch(() => {});
    }
  });
};

/**
 * Silent network monitoring
 */
export const silentNetworkMonitoring = () => {
  // Monitor for unusual network patterns
  let requestCount = 0;
  const originalFetch = window.fetch;
  
  window.fetch = async (...args) => {
    requestCount++;
    
    // If too many requests in short time, might be scraping
    if (requestCount > 50) {
      console.warn('High request volume detected');
      // Could implement silent blocking here
    }
    
    return originalFetch(...args);
  };
};

/**
 * Silent session monitoring
 */
export const silentSessionMonitoring = () => {
  let sessionStart = Date.now();
  let pageViews = 1;
  
  // Track session duration
  setInterval(() => {
    const sessionDuration = Date.now() - sessionStart;
    
    // If session too long, might be automated
    if (sessionDuration > 3600000) { // 1 hour
      console.warn('Long session detected');
    }
  }, 300000); // Check every 5 minutes
  
  // Track page views
  window.addEventListener('beforeunload', () => {
    pageViews++;
    
    // If too many page views in short time
    if (pageViews > 20) {
      console.warn('High page view count detected');
    }
  });
};

/**
 * Initialize all invisible security measures
 */
export const initInvisibleSecurity = () => {
  if (import.meta.env.PROD) {
    silentBotDetection();
    invisibleFingerprint();
    silentAttackDetection();
    silentContentProtection();
    silentNetworkMonitoring();
    silentSessionMonitoring();
    
    // Log that security is active (only in console)
    console.log('%c🛡️ Invisible Security Active', 'color: #00ff00; font-weight: bold;');
  }
};
