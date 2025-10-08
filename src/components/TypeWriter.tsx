import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  onComplete?: () => void;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '', 
  as: Component = 'span',
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Start after delay
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete && currentIndex === text.length) {
      onComplete();
    }
  }, [currentIndex, text, speed, isStarted, onComplete]);

  return (
    <Component className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </Component>
  );
};

export default TypeWriter;

