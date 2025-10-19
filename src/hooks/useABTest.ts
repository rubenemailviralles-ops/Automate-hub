import { useState, useEffect } from 'react';
import { abTesting, ABTest, ABVariation, ABTestAnalytics } from '../utils/abTesting';

/**
 * Custom hook for A/B testing
 * 
 * This hook provides:
 * - Easy access to A/B test variations
 * - Automatic event tracking
 * - Real-time analytics
 * - Test management functions
 */

interface UseABTestReturn {
  variation: ABVariation | null;
  test: ABTest | null;
  analytics: ABTestAnalytics | null;
  trackEvent: (event: 'click' | 'conversion' | 'bounce', metadata?: any) => void;
  isLoading: boolean;
  isTestActive: boolean;
}

export const useABTest = (testName: string): UseABTestReturn => {
  const [variation, setVariation] = useState<ABVariation | null>(null);
  const [test, setTest] = useState<ABTest | null>(null);
  const [analytics, setAnalytics] = useState<ABTestAnalytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get active test
    const activeTest = abTesting.getActiveTest(testName);
    setTest(activeTest);

    if (activeTest) {
      // Get user's assigned variation
      const assignedVariation = abTesting.getAssignedVariation(activeTest.id);
      setVariation(assignedVariation);

      // Get analytics
      const testAnalytics = abTesting.getTestAnalytics(activeTest.id);
      setAnalytics(testAnalytics);

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

      // Update analytics after tracking
      const updatedAnalytics = abTesting.getTestAnalytics(test.id);
      setAnalytics(updatedAnalytics);
    }
  };

  return {
    variation,
    test,
    analytics,
    trackEvent,
    isLoading,
    isTestActive: !!test && test.status === 'active',
  };
};

/**
 * Hook for creating and managing A/B tests
 */
export const useABTestManagement = () => {
  const [tests, setTests] = useState<ABTest[]>([]);

  useEffect(() => {
    loadTests();
  }, []);

  const loadTests = () => {
    const activeTests = abTesting.getActiveTests();
    setTests(activeTests);
  };

  const createTest = (test: Omit<ABTest, 'id'>) => {
    const testId = abTesting.createTest(test);
    loadTests();
    return testId;
  };

  const pauseTest = (testId: string) => {
    abTesting.pauseTest(testId);
    loadTests();
  };

  const completeTest = (testId: string) => {
    abTesting.completeTest(testId);
    loadTests();
  };

  const getTestAnalytics = (testId: string) => {
    return abTesting.getTestAnalytics(testId);
  };

  return {
    tests,
    createTest,
    pauseTest,
    completeTest,
    getTestAnalytics,
    refreshTests: loadTests,
  };
};
