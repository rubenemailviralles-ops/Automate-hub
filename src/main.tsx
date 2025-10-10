import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import * as serviceWorkerRegistration from './utils/serviceWorkerRegistration';
import { initSentry } from './utils/sentry';

// Initialize Sentry error tracking
initSentry();

// Optimize scroll performance with passive event listeners
if ('addEventListener' in window) {
  const passiveSupported = (() => {
    let supported = false;
    try {
      const options = {
        get passive() {
          supported = true;
          return false;
        },
      };
      window.addEventListener('test', null as any, options);
      window.removeEventListener('test', null as any, options);
    } catch (err) {
      supported = false;
    }
    return supported;
  })();

  if (passiveSupported) {
    // Override default addEventListener to use passive listeners for scroll/touch events
    const addEventListenerOriginal = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave'];
      const isPassiveEvent = passiveEvents.includes(type);
      
      if (isPassiveEvent && typeof options === 'object') {
        options.passive = options.passive !== undefined ? options.passive : true;
      } else if (isPassiveEvent && (options === undefined || typeof options === 'boolean')) {
        options = { passive: true, capture: typeof options === 'boolean' ? options : false };
      }
      
      return addEventListenerOriginal.call(this, type, listener, options);
    };
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register({
  onSuccess: () => {
    console.log('[PWA] Content is cached for offline use.');
  },
  onUpdate: (registration) => {
    console.log('[PWA] New content available! Please refresh.');
    // Optionally show a notification to user
    if (confirm('New version available! Reload to update?')) {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
      }
    }
  },
});
