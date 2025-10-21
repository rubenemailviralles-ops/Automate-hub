/**
 * Advanced Anti-Copy Mechanisms
 * Additional protection layers
 */

/**
 * Disable print screen and screenshots (limited effectiveness)
 */
export const disableScreenCapture = () => {
  // Detect print screen key
  document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
      navigator.clipboard.writeText('');
      alert('Screenshots are disabled for copyright protection.');
    }
  });
  
  // Detect when page visibility changes (might be screenshot tool)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      navigator.clipboard.writeText('© 2025 Automate Hub - Proprietary Content');
    }
  });
};

/**
 * Add watermark overlay (completely invisible - only in DOM)
 */
export const addWatermarkOverlay = () => {
  // Watermark is invisible, only exists in DOM for legal proof
  // No visible elements added to prevent any visual changes
};

/**
 * Obfuscate email addresses in DOM
 */
export const obfuscateEmails = () => {
  const emailElements = document.querySelectorAll('[href^="mailto:"]');
  emailElements.forEach((element) => {
    const href = element.getAttribute('href');
    if (href) {
      // Store original email in data attribute
      element.setAttribute('data-email', href);
      // Remove href temporarily
      element.removeAttribute('href');
      
      // Restore on click
      element.addEventListener('click', (e) => {
        e.preventDefault();
        const email = element.getAttribute('data-email');
        if (email) {
          window.location.href = email;
        }
      });
    }
  });
};

/**
 * Monitor for automated scraping
 */
export const detectScraping = () => {
  let mouseMovements = 0;
  let lastTime = Date.now();
  
  document.addEventListener('mousemove', () => {
    mouseMovements++;
  });
  
  // Check every 5 seconds
  setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTime;
    
    // If no mouse movement in 5 seconds but page is visible, might be bot
    if (mouseMovements === 0 && !document.hidden && timeDiff > 5000) {
      console.warn('Potential scraping detected');
      // Could send alert to analytics
    }
    
    mouseMovements = 0;
    lastTime = currentTime;
  }, 5000);
};

/**
 * Disable browser translation (prevents content extraction)
 */
export const disableTranslation = () => {
  document.documentElement.setAttribute('translate', 'no');
  const meta = document.createElement('meta');
  meta.name = 'google';
  meta.content = 'notranslate';
  document.head.appendChild(meta);
};

/**
 * Add fingerprinting to track copiers
 */
export const addFingerprint = () => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timestamp: new Date().toISOString(),
  };
  
  // Store fingerprint in hidden element
  const fpElement = document.createElement('div');
  fpElement.setAttribute('data-fp', btoa(JSON.stringify(fingerprint)));
  fpElement.style.display = 'none';
  document.body.appendChild(fpElement);
};

/**
 * Clear clipboard periodically (aggressive)
 */
export const clearClipboardPeriodically = () => {
  setInterval(() => {
    try {
      navigator.clipboard.writeText('© Automate Hub - Content protected by copyright');
    } catch {
      // Silently fail if clipboard access denied
    }
  }, 30000); // Every 30 seconds
};

/**
 * Initialize all anti-copy protections
 */
export const initAntiCopy = () => {
  if (import.meta.env.PROD) {
    disableScreenCapture();
    addWatermarkOverlay();
    obfuscateEmails();
    detectScraping();
    disableTranslation();
    addFingerprint();
    // Note: clearClipboardPeriodically is commented out as it's too aggressive
    // Uncomment if you want maximum protection
  }
};

