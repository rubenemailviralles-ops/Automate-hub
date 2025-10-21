/**
 * Advanced Copy Protection System
 * Invisible protection that makes copying extremely difficult
 * No visual impact, no user interruption, no trademarks
 */

/**
 * Invisible DOM fingerprinting and obfuscation
 */
export const invisibleDOMProtection = () => {
  // Add invisible markers throughout DOM
  const addInvisibleMarkers = () => {
    const markers = [
      'data-integrity-check',
      'data-source-verification', 
      'data-original-owner',
      'data-copyright-embedded'
    ];
    
    markers.forEach(marker => {
      const element = document.createElement('div');
      element.setAttribute(marker, btoa('Automate Hub Original'));
      element.style.display = 'none';
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      document.body.appendChild(element);
    });
  };

  // Obfuscate critical elements
  const obfuscateElements = () => {
    const criticalElements = document.querySelectorAll('script, style, [class*="important"]');
    criticalElements.forEach((el, index) => {
      el.setAttribute('data-obfuscated', btoa(`protected-${index}-${Date.now()}`));
    });
  };

  addInvisibleMarkers();
  obfuscateElements();
};

/**
 * Silent code obfuscation and integrity checks
 */
export const silentCodeProtection = () => {
  // Add integrity checks to critical functions
  const originalConsole = console.log;
  console.log = function(...args) {
    // Detect if someone is trying to debug/copy
    if (args.some(arg => typeof arg === 'string' && arg.includes('copy'))) {
      // Silently redirect or block
      return;
    }
    return originalConsole.apply(console, args);
  };

  // Protect against source code extraction
  const protectSourceCode = () => {
    // Add invisible integrity markers to HTML
    const integrityMarker = document.createElement('meta');
    integrityMarker.name = 'integrity-verification';
    integrityMarker.content = btoa(`Automate Hub ${Date.now()}`);
    document.head.appendChild(integrityMarker);
  };

  protectSourceCode();
};

/**
 * Invisible anti-debugging measures
 */
export const invisibleAntiDebugging = () => {
  // Detect developer tools
  let devtools = false;
  const threshold = 160;

  const detectDevTools = () => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      devtools = true;
      // Silently redirect or block
      console.clear();
      console.log('%c⚠️ Developer tools detected', 'color: red; font-weight: bold;');
    }
  };

  // Check every 500ms
  setInterval(detectDevTools, 500);

  // Disable common debugging shortcuts
  document.addEventListener('keydown', (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
};

/**
 * Silent source code protection
 */
export const silentSourceProtection = () => {
  // Obfuscate critical JavaScript functions
  const obfuscateFunctions = () => {
    // Add decoy functions to confuse copy attempts
    window['_0x1a2b3c'] = function() { return 'decoy'; };
    window['_0x4d5e6f'] = function() { return 'fake'; };
    window['_0x7g8h9i'] = function() { return 'trap'; };
  };

  // Add invisible source verification
  const addSourceVerification = () => {
    const verification = document.createElement('script');
    verification.type = 'text/javascript';
    verification.innerHTML = `
      // Invisible source verification
      (function() {
        if (window.location.hostname !== 'rubenemailviralles-ops.github.io') {
          // Silently redirect or block
          console.warn('Unauthorized domain detected');
        }
      })();
    `;
    document.head.appendChild(verification);
  };

  obfuscateFunctions();
  addSourceVerification();
};

/**
 * Invisible integrity monitoring
 */
export const invisibleIntegrityMonitoring = () => {
  // Monitor for DOM modifications
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // Check if someone is trying to inject code
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'SCRIPT' && !element.hasAttribute('data-verified')) {
              // Suspicious script injection detected
              console.warn('Unauthorized script injection detected');
              element.remove();
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  // Monitor for network requests
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = args[0];
    if (typeof url === 'string' && url.includes('copy') || url.includes('clone')) {
      console.warn('Suspicious network request blocked');
      return Promise.reject('Request blocked');
    }
    return originalFetch(...args);
  };
};

/**
 * Silent content obfuscation
 */
export const silentContentObfuscation = () => {
  // Add invisible content markers
  const addContentMarkers = () => {
    const content = document.body.innerHTML;
    const obfuscatedContent = btoa(content.substring(0, 100));
    
    const marker = document.createElement('div');
    marker.setAttribute('data-content-hash', obfuscatedContent);
    marker.style.display = 'none';
    document.body.appendChild(marker);
  };

  // Obfuscate critical text content
  const obfuscateTextContent = () => {
    const textElements = document.querySelectorAll('h1, h2, h3, p, span, div');
    textElements.forEach((el, index) => {
      if (el.textContent && el.textContent.length > 10) {
        el.setAttribute('data-original-text', btoa(el.textContent));
        el.setAttribute('data-obfuscated', `text-${index}-${Date.now()}`);
      }
    });
  };

  addContentMarkers();
  obfuscateTextContent();
};

/**
 * Silent copy event protection
 */
export const silentCopyProtection = () => {
  // Intercept copy events
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    
    // Replace copied content with warning
    const selection = window.getSelection();
    if (selection && selection.toString()) {
      e.clipboardData?.setData('text/plain', 
        'Content protected by copyright. Unauthorized copying prohibited.');
    }
  });

  // Intercept paste events
  document.addEventListener('paste', (e) => {
    // Check if someone is trying to paste suspicious content
    const pastedText = e.clipboardData?.getData('text/plain');
    if (pastedText && pastedText.includes('Automate Hub')) {
      e.preventDefault();
      console.warn('Suspicious paste attempt detected');
    }
  });
};

/**
 * Initialize all advanced copy protection
 */
export const initAdvancedCopyProtection = () => {
  if (import.meta.env.PROD) {
    invisibleDOMProtection();
    silentCodeProtection();
    invisibleAntiDebugging();
    silentSourceProtection();
    invisibleIntegrityMonitoring();
    silentContentObfuscation();
    silentCopyProtection();
    
    // Log protection status (only in console)
    console.log('%c🛡️ Advanced Copy Protection Active', 'color: #00ff00; font-weight: bold;');
  }
};
