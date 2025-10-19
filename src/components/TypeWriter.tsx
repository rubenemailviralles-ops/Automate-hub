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
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer to detect when element is in viewport
  useEffect(() => {
    // Skip animation on mobile - instant render
    if (isMobile) {
      setIsVisible(true);
      if (onComplete) onComplete();
      return;
    }
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animate in when entering viewport, animate out when leaving
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (onComplete) {
              setTimeout(onComplete, 600); // Call onComplete after animation
            }
          } else {
            setIsVisible(false);
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
  }, [isMobile, onComplete]);

  return (
    <Component 
      ref={elementRef as any} 
      className={className}
      style={isMobile ? {} : { 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        transitionDelay: `${delay}ms`
      }}
    >
      {text}
      {children}
    </Component>
  );
};

export default TypeWriter;

