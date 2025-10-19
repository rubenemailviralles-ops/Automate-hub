import { useEffect, useRef } from 'react';

export const useMobileHover = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Only apply on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    let ticking = false;

    // Create intersection observer for mobile hover effects (optimized)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Throttle updates using requestAnimationFrame
        if (!ticking) {
          requestAnimationFrame(() => {
            entries.forEach((entry) => {
              const element = entry.target as HTMLElement;
              
              if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                // Element is more than 50% visible, activate hover effect
                element.classList.add('mobile-active');
              } else {
                // Element is less than 50% visible, remove hover effect
                element.classList.remove('mobile-active');
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      {
        threshold: 0.5, // Single threshold for best performance
        rootMargin: '-10% 0px -10% 0px' // Trigger when element is in the middle 80% of viewport
      }
    );

    // Use setTimeout to defer observation setup until after initial render
    const timeoutId = setTimeout(() => {
      const hoverElements = document.querySelectorAll(
        '.hover-lift'
      );
      
      hoverElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Re-initialize when route changes
  const reinitialize = () => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !observerRef.current) return;

    // Disconnect existing observer
    observerRef.current.disconnect();

    // Re-observe all hover elements and 3D elements
    setTimeout(() => {
      const hoverElements = document.querySelectorAll(
        '.hover-lift'
      );
      
      hoverElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
    }, 100);
  };

  return { reinitialize };
};