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
  const elementRef = useRef<HTMLElement>(null);
  const hasCalledComplete = useRef(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animate in and out based on visibility
          setIsVisible(entry.isIntersecting);
          
          // Only call onComplete once when first appearing
          if (entry.isIntersecting && !hasCalledComplete.current && onComplete) {
            hasCalledComplete.current = true;
            setTimeout(onComplete, isMobile ? 300 : 600);
          }
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
  }, [onComplete, isMobile]);

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

