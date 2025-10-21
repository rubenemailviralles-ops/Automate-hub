/**
 * Copy Protection Utilities
 * Deters casual copying while maintaining user experience
 */

/**
 * Disable right-click context menu
 */
export const disableRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });
};

/**
 * Disable common keyboard shortcuts for dev tools and copying
 */
export const disableKeyboardShortcuts = () => {
  document.addEventListener('keydown', (e) => {
    // Disable F12 (DevTools)
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+A (Select All) on body, but allow in inputs
    if (e.ctrlKey && e.key === 'a' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+C (Copy) outside of inputs
    if (e.ctrlKey && e.key === 'c' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
      return false;
    }
    
    // Disable Ctrl+X (Cut)
    if (e.ctrlKey && e.key === 'x' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
      return false;
    }
  });
};

/**
 * Disable text selection on protected content
 */
export const disableTextSelection = () => {
  // Add CSS to prevent text selection
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    
    /* Allow selection in form inputs */
    input, textarea, [contenteditable="true"] {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
  `;
  document.head.appendChild(style);
};

/**
 * Disable image drag and drop
 */
export const disableImageDrag = () => {
  document.addEventListener('dragstart', (e) => {
    if (e.target instanceof HTMLImageElement) {
      e.preventDefault();
      return false;
    }
  });
};

/**
 * Add console warning
 */
export const addConsoleWarning = () => {
  console.clear();
  console.log('%c⚠️ WARNING', 'color: red; font-size: 50px; font-weight: bold;');
  console.log('%c🚨 STOP!', 'color: orange; font-size: 40px; font-weight: bold;');
  console.log('%cThis is a browser feature intended for developers.', 'font-size: 18px;');
  console.log('%cIf someone told you to copy-paste something here, it is a scam.', 'font-size: 16px; color: red;');
  console.log('%c\n© 2024 Automate Hub. All rights reserved.\nUnauthorized copying, modification, or distribution is prohibited.', 'font-size: 14px; color: #888;');
  console.log('%c\nThis website is protected by copyright law.', 'font-size: 12px; font-style: italic;');
};

/**
 * Detect if DevTools is open
 */
export const detectDevTools = () => {
  const threshold = 160;
  let devtoolsOpen = false;
  
  const checkDevTools = () => {
    if (
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold
    ) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        console.clear();
        addConsoleWarning();
      }
    } else {
      devtoolsOpen = false;
    }
  };
  
  setInterval(checkDevTools, 1000);
};

/**
 * Add invisible copyright watermark to page
 */
export const addInvisibleWatermark = () => {
  const watermark = document.createElement('div');
  watermark.textContent = `© ${new Date().getFullYear()} Automate Hub. All Rights Reserved. Unauthorized copying prohibited.`;
  watermark.style.cssText = 'position:absolute;left:-9999px;top:-9999px;opacity:0;pointer-events:none;';
  watermark.setAttribute('aria-hidden', 'true');
  document.body.appendChild(watermark);
};

/**
 * Protect against copy events
 */
export const protectCopyEvents = () => {
  document.addEventListener('copy', (e) => {
    // Allow copying from inputs
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return true;
    }
    
    // For other content, modify the clipboard
    const selection = window.getSelection();
    if (selection) {
      const text = selection.toString();
      if (text.length > 0) {
        e.preventDefault();
        const copyrightNotice = `\n\n---\nSource: Automate Hub (https://automate-hub.com)\n© ${new Date().getFullYear()} All Rights Reserved\n`;
        if (e.clipboardData) {
          e.clipboardData.setData('text/plain', text + copyrightNotice);
        }
      }
    }
  });
};

/**
 * Initialize all copy protection
 */
export const initCopyProtection = () => {
  // Only in production
  if (import.meta.env.PROD) {
    disableRightClick();
    disableKeyboardShortcuts();
    disableTextSelection();
    disableImageDrag();
    addConsoleWarning();
    detectDevTools();
    addInvisibleWatermark();
    protectCopyEvents();
    
    // Log protection status
    console.log('%c🔒 Copy Protection Active', 'color: green; font-weight: bold;');
  }
};

/**
 * Add copyright metadata to document
 */
export const addCopyrightMetadata = () => {
  // Add copyright meta tag
  const metaCopyright = document.createElement('meta');
  metaCopyright.name = 'copyright';
  metaCopyright.content = `© ${new Date().getFullYear()} Automate Hub. All rights reserved.`;
  document.head.appendChild(metaCopyright);
  
  // Add rights meta tag
  const metaRights = document.createElement('meta');
  metaRights.name = 'rights';
  metaRights.content = 'All content is proprietary and confidential';
  document.head.appendChild(metaRights);
  
  // Add author meta tag
  const metaAuthor = document.createElement('meta');
  metaAuthor.name = 'author';
  metaAuthor.content = 'Automate Hub';
  document.head.appendChild(metaAuthor);
};

