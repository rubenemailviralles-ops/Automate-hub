import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  onComplete?: () => void;
  children?: ReactNode;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 0, 
  className = '', 
  as: Component = 'span',
  onComplete,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const hasCalledComplete = useRef(false);

  // Intersection Observer to detect when element is in viewport
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
          
          // Only call onComplete once when first appearing
          if (entry.isIntersecting && !hasCalledComplete.current && onComplete) {
            hasCalledComplete.current = true;
            setTimeout(onComplete, mobile ? 300 : 600);
          }
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
  }, [onComplete]);

  // Simpler, faster animations for mobile
  const mobileStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  };

  const desktopStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform'
  };

  return (
    <Component 
      ref={elementRef as any} 
      className={className}
      style={isMobile ? mobileStyle : desktopStyle}
    >
      {text}
      {children}
    </Component>
  );
};

export default TypeWriter;

