import { useEffect } from 'react';

const brandingSelectors = [
  '[data-bolt-branding]',
  '.bolt-branding',
  '.bolt__branding',
  '.bolt-badge',
  '.bolt-footer-branding',
  '.bolt-made-by',
];

const brandingPhrases = ['made in bolt', 'powered by bolt', 'built with bolt'];

const hideElement = (element: HTMLElement) => {
  element.style.setProperty('display', 'none', 'important');
  element.style.setProperty('visibility', 'hidden', 'important');
  element.style.setProperty('pointer-events', 'none', 'important');
  element.setAttribute('aria-hidden', 'true');
};

export const useRemoveBoltBranding = () => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const body = document.body;
    if (!body) {
      return;
    }

    let rafId = 0;

    const scanForBranding = () => {
      brandingSelectors.forEach((selector) => {
        body.querySelectorAll(selector).forEach((node) => hideElement(node as HTMLElement));
      });

      const possibleNodes = body.querySelectorAll('a, span, div, footer, section');
      possibleNodes.forEach((node) => {
        const text = node.textContent?.trim().toLowerCase() ?? '';
        if (!text) return;

        if (brandingPhrases.some((phrase) => text.includes(phrase))) {
          const target = (node.closest('[class]') as HTMLElement) ?? (node as HTMLElement);
          hideElement(target);
        }
      });
    };

    const scheduleScan = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(scanForBranding);
    };

    scheduleScan();

    const observer = new MutationObserver(scheduleScan);
    observer.observe(body, { childList: true, subtree: true });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, []);
};


