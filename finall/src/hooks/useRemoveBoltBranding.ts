import { useEffect } from 'react';

const brandingSelectors = [
  '[data-bolt-branding]',
  '.bolt-branding',
  '.bolt__branding',
  '.bolt-badge',
  '.bolt-footer-branding',
  '.bolt-made-by',
  'a[href*="bolt.new"]',
];

const brandingPhrases = ['made in bolt', 'powered by bolt', 'built with bolt'];

const hideElement = (element: HTMLElement) => {
  element.style.setProperty('display', 'none', 'important');
  element.style.setProperty('visibility', 'hidden', 'important');
  element.style.setProperty('pointer-events', 'none', 'important');
  element.setAttribute('aria-hidden', 'true');
};

const forEachNodeAndShadow = (root: Node, callback: (el: Element) => void) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let current = walker.currentNode as Element | null;
  while (current) {
    callback(current);
    const anyEl = current as any;
    if (anyEl && anyEl.shadowRoot) {
      forEachNodeAndShadow(anyEl.shadowRoot, callback);
    }
    current = walker.nextNode() as Element | null;
  }
};

export const useRemoveBoltBranding = () =>
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    let rafId = 0;

    const scanForBranding = () => {
      brandingSelectors.forEach((selector) => {
        forEachNodeAndShadow(document, (el) => {
          if (typeof (el as any).matches === 'function' && el.matches(selector)) {
            hideElement(el as HTMLElement);
          }
        });
      });

      forEachNodeAndShadow(document, (el) => {
        const text = (el.textContent || '').trim().toLowerCase();
        if (!text) return;
        if (brandingPhrases.some((phrase) => text.includes(phrase))) {
          const target = (el.closest('[class]') as HTMLElement) ?? (el as HTMLElement);
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
    observer.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, []);


