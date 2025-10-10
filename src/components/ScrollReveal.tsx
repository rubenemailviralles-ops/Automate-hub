import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animate in and out based on visibility
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
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
  }, []);

  // Simpler, faster animations for mobile
  const mobileStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    transitionDelay: isMobile ? '0ms' : `${delay}ms`,
  };

  const desktopStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform'
  };

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={isMobile ? mobileStyle : desktopStyle}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

