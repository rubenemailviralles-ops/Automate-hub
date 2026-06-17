import { useEffect } from 'react';

export const useChatbotPosition = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Only apply animation on mobile devices
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) return;
      
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
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('near-bottom');
    };
  }, []);
};