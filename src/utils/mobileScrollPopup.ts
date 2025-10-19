/**
 * Mobile Scroll Popup Utility
 * 
 * This utility automatically adds scroll-reveal animations to elements
 * with hover popup classes on mobile devices. When elements scroll into view,
 * they "pop up" with a smooth animation instead of requiring hover/click.
 */

let observer: IntersectionObserver | null = null;
let isInitialized = false;

/**
 * Check if device is mobile (touch device)
 */
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth < 1024;
  const hasNoHover = window.matchMedia('(hover: none)').matches;
  
  return isTouchDevice && isSmallScreen && hasNoHover;
};

/**
 * Initialize mobile scroll popup observer
 */
export const initMobileScrollPopup = () => {
  // Only initialize once
  if (isInitialized || typeof window === 'undefined') return;
  
  // Only run on mobile devices
  if (!isMobileDevice()) return;
  
  // Create Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view - add 'in-view' class
          entry.target.classList.add('in-view');
        } else {
          // Element is out of view - remove 'in-view' class for re-animation
          entry.target.classList.remove('in-view');
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
    }
  );
  
  // Find all elements with hover popup classes
  const selectors = [
    '.hover\\:-translate-y-2',
    '.hover\\:scale-105',
    '.hover\\:-translate-y-1',
  ];
  
  const elements = document.querySelectorAll(selectors.join(', '));
  
  // Observe each element
  elements.forEach((element) => {
    observer?.observe(element);
    
    // Add attribute to mark as non-interactive container
    element.setAttribute('data-scroll-popup-container', 'true');
    
    // Disable any click handlers on the container itself (but not children)
    const disableContainerClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // Only prevent if clicking directly on the container (not bubbled from children)
      if (target === element) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };
    
    // Add click prevention only on direct container clicks
    element.addEventListener('click', disableContainerClick, true);
    element.addEventListener('touchend', disableContainerClick, true);
  });
  
  isInitialized = true;
};

/**
 * Clean up observer (call on unmount if needed)
 */
export const cleanupMobileScrollPopup = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  isInitialized = false;
};

/**
 * Re-scan and observe new elements (call after dynamic content loads)
 */
export const refreshMobileScrollPopup = () => {
  if (!isMobileDevice() || !observer) return;
  
  const selectors = [
    '.hover\\:-translate-y-2',
    '.hover\\:scale-105',
    '.hover\\:-translate-y-1',
  ];
  
  const elements = document.querySelectorAll(selectors.join(', '));
  
  elements.forEach((element) => {
    // Only observe if not already observed
    if (!element.getAttribute('data-scroll-popup-container')) {
      element.setAttribute('data-scroll-popup-container', 'true');
      observer?.observe(element);
      
      // Add click prevention for new elements
      const disableContainerClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target === element) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };
      
      element.addEventListener('click', disableContainerClick, true);
      element.addEventListener('touchend', disableContainerClick, true);
    }
  });
};
