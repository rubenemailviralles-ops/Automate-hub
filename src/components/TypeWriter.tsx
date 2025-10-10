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
  const hasAnimated = useRef(false);

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only animate once for better performance
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            if (onComplete) {
              setTimeout(onComplete, 600); // Call onComplete after animation
            }
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

  return (
    <Component 
      ref={elementRef as any} 
      className={className}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {text}
      {children}
    </Component>
  );
};

export default TypeWriter;

