import React, { useEffect, useState } from 'react';
import { abTesting, ABTest, ABVariation } from '../utils/abTesting';

interface ABTestWrapperProps {
  testName: string;
  children: (variation: ABVariation | null, trackEvent: (event: string, metadata?: any) => void) => React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A/B Test Wrapper Component
 * 
 * This component handles:
 * - Loading the appropriate variation for the user
 * - Tracking view events
 * - Providing a trackEvent function for child components
 * - Fallback rendering if test is not active
 */
const ABTestWrapper: React.FC<ABTestWrapperProps> = ({ 
  testName, 
  children, 
  fallback = null 
}) => {
  const [variation, setVariation] = useState<ABVariation | null>(null);
  const [test, setTest] = useState<ABTest | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get active test
    const activeTest = abTesting.getActiveTest(testName);
    setTest(activeTest);

    if (activeTest) {
      // Get user's assigned variation
      const assignedVariation = abTesting.getAssignedVariation(activeTest.id);
      setVariation(assignedVariation);

      // Track view event
      if (assignedVariation) {
        abTesting.trackEvent(
          activeTest.id,
          assignedVariation.id,
          'view',
          { testName, variationName: assignedVariation.name }
        );
      }
    }

    setIsLoading(false);
  }, [testName]);

  const trackEvent = (event: 'click' | 'conversion' | 'bounce', metadata?: any) => {
    if (test && variation) {
      abTesting.trackEvent(test.id, variation.id, event, {
        testName,
        variationName: variation.name,
        ...metadata,
      });
    }
  };

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (!test || !variation) {
    return <>{fallback}</>;
  }

  return <>{children(variation, trackEvent)}</>;
};

export default ABTestWrapper;
