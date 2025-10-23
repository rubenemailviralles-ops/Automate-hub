/**
 * Advanced Invisible Bot Detection
 * Detects sophisticated bots and automation tools
 */

export const detectAdvancedBots = (): { isBot: boolean; botType?: string } => {
  const userAgent = navigator.userAgent;
  const windowFeatures = {
    hasChrome: 'chrome' in window,
    hasWebdriver: 'webdriver' in navigator,
    hasAutomation: 'automation' in navigator,
    hasPhantom: 'callPhantom' in window,
    hasSelenium: 'selenium' in window,
    hasNightmare: 'nightmare' in window,
    hasPuppeteer: 'puppeteer' in window
  };

  // Check for automation indicators
  if (windowFeatures.hasWebdriver || windowFeatures.hasAutomation) {
    return { isBot: true, botType: 'selenium' };
  }

  if (windowFeatures.hasPhantom) {
    return { isBot: true, botType: 'phantomjs' };
  }

  if (windowFeatures.hasSelenium) {
    return { isBot: true, botType: 'selenium' };
  }

  if (windowFeatures.hasNightmare) {
    return { isBot: true, botType: 'nightmare' };
  }

  if (windowFeatures.hasPuppeteer) {
    return { isBot: true, botType: 'puppeteer' };
  }

  // Check for headless browser indicators
  if (navigator.webdriver) {
    return { isBot: true, botType: 'headless' };
  }

  // Check for missing browser features
  if (!window.chrome || !window.chrome.runtime) {
    return { isBot: true, botType: 'headless_chrome' };
  }

  // Check for automation user agents
  const automationPatterns = [
    /selenium/i, /webdriver/i, /phantom/i, /headless/i,
    /puppeteer/i, /nightmare/i, /playwright/i, /cypress/i
  ];

  for (const pattern of automationPatterns) {
    if (pattern.test(userAgent)) {
      return { isBot: true, botType: 'automation_tool' };
    }
  }

  return { isBot: false };
};

export const detectDevTools = (): boolean => {
  // Detect if developer tools are open (invisible check)
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  
  return widthThreshold || heightThreshold;
};

export const detectCopyAttempts = (): boolean => {
  // Detect common copy attempts (invisible)
  const copyEvents = ['copy', 'cut', 'selectstart', 'contextmenu'];
  let copyAttempts = 0;
  
  copyEvents.forEach(event => {
    document.addEventListener(event, () => {
      copyAttempts++;
    }, { passive: true });
  });
  
  return copyAttempts > 5; // More than 5 copy attempts
};

export const detectSuspiciousActivity = (): boolean => {
  // Detect rapid clicking (invisible)
  let clickCount = 0;
  const clickTimer = setTimeout(() => {
    clickCount = 0;
  }, 1000);

  document.addEventListener('click', () => {
    clickCount++;
    if (clickCount > 10) {
      return true; // Suspicious rapid clicking
    }
  }, { passive: true });

  return false;
};
