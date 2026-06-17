import { useEffect, useRef } from 'react';

export const useMobileHover = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Only apply on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    // Create intersection observer for mobile hover effects
    observerRef.current = new IntersectionObserver(
      (entries) => {
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
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px' // Trigger when element is in the middle 80% of viewport
      }
    );

    // Observe all hover elements
    const hoverElements = document.querySelectorAll(
      '.hover-pop, .hover-pop-subtle, .hover-pop-button, .hover-pop-text, .hover-lift'
    );
    
    hoverElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Cleanup function
    return () => {
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

    // Re-observe all hover elements
    setTimeout(() => {
      const hoverElements = document.querySelectorAll(
        '.hover-pop, .hover-pop-subtle, .hover-pop-button, .hover-pop-text, .hover-lift'
      );
      
      hoverElements.forEach((element) => {
        observerRef.current?.observe(element);
      });
    }, 100);
  };

  return { reinitialize };
};