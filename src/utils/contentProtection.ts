/**
 * Invisible Content Protection
 * Protects content from copying and scraping
 */

export const obfuscateContent = (): void => {
  // Dynamic class name obfuscation (invisible)
  const elements = document.querySelectorAll('[class]');
  elements.forEach((element, index) => {
    if (Math.random() > 0.7) { // Only obfuscate some elements
      const originalClass = element.className;
      const obfuscatedClass = `_${Math.random().toString(36).substr(2, 9)}`;
      element.className = obfuscatedClass;
      
      // Store original for restoration
      (element as any).__originalClass = originalClass;
    }
  });
};

export const addInvisibleWatermark = (): void => {
  // Add invisible watermark to detect copying
  const watermark = document.createElement('div');
  watermark.innerHTML = '<!-- AutomateHub_Protected -->';
  watermark.style.cssText = `
    position: absolute !important;
    left: -9999px !important;
    top: -9999px !important;
    width: 1px !important;
    height: 1px !important;
    opacity: 0 !important;
    visibility: hidden !important;
    z-index: -1 !important;
  `;
  document.body.appendChild(watermark);
};

export const protectImages = (): void => {
  // Make images harder to save (invisible)
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    img.style.userSelect = 'none';
    img.style.webkitUserDrag = 'none';
  });
};

export const addAntiDebugging = (): void => {
  // Detect and block debugging attempts (invisible)
  let devtools = false;
  
  const checkDevTools = () => {
    if (window.outerHeight - window.innerHeight > 200 || 
        window.outerWidth - window.innerWidth > 200) {
      devtools = true;
      // Log suspicious activity
      console.log('Developer tools detected');
    }
  };
  
  setInterval(checkDevTools, 1000);
  
  // Block common debugging methods
  const originalConsole = console.log;
  console.log = (...args) => {
    if (devtools) {
      return; // Block console in dev tools
    }
    originalConsole.apply(console, args);
  };
};

export const addCopyProtection = (): void => {
  // Prevent right-click context menu (invisible)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  // Prevent text selection (invisible)
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
  });

  // Prevent copy shortcuts (invisible)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 'x')) {
      e.preventDefault();
    }
  });
};

export const addInvisibleTracking = (): void => {
  // Add invisible tracking elements
  const tracker = document.createElement('div');
  tracker.id = 'invisible-tracker';
  tracker.style.cssText = `
    position: absolute !important;
    left: -9999px !important;
    top: -9999px !important;
    width: 1px !important;
    height: 1px !important;
    opacity: 0 !important;
    visibility: hidden !important;
    z-index: -1 !important;
  `;
  tracker.innerHTML = '<!-- Protected by AutomateHub Security -->';
  document.body.appendChild(tracker);
};
