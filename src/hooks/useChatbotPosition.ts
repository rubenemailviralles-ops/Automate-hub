import { useEffect } from 'react';

export const useChatbotPosition = () => {
  useEffect(() => {
    // Only apply animation on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          
          // Calculate if user is near bottom (within 200px of bottom)
          const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
          const isNearBottom = distanceFromBottom <= 200;
          
          // Add or remove class based on scroll position
          if (isNearBottom) {
            document.body.classList.add('near-bottom');
          } else {
            document.body.classList.remove('near-bottom');
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('near-bottom');
    };
  }, []);
};