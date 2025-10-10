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
  const elementRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Force update on each intersection change
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px',
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Simpler, faster animations for mobile
  const mobileStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    transitionDelay: '0ms',
  };

  const desktopStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    transitionDelay: isVisible ? `${delay}ms` : '0ms',
    willChange: 'opacity, transform'
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

