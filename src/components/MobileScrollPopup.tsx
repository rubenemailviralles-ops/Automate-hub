import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface MobileScrollPopupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Mobile Scroll Popup Component
 * 
 * On mobile devices, this component replaces hover effects with scroll-reveal animations.
 * Blocks will "pop up" (translate and shadow) when scrolled into view.
 * On desktop, the hover effects work normally.
 */
const MobileScrollPopup: React.FC<MobileScrollPopupProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Detect if device is mobile (touch device)
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice && isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up Intersection Observer for mobile scroll detection
  useEffect(() => {
    if (!isMobile) return; // Only apply on mobile

    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view - trigger popup effect
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            // Element is out of view - reset
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isMobile, delay]);

  // On mobile, apply the popup effect when scrolled into view
  // On desktop, just render normally (hover effects will work)
  const mobileStyles = isMobile ? {
    transform: isVisible ? 'translateY(-8px)' : 'translateY(0)',
    boxShadow: isVisible 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' 
      : 'inherit',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
  } : {};

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={mobileStyles}
    >
      {children}
    </div>
  );
};

export default MobileScrollPopup;
