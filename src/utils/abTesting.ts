/**
 * A/B Testing Framework for Conversion Optimization
 * 
 * This framework allows you to:
 * - Create multiple variations of components
 * - Track user interactions and conversions
 * - Analyze which variations perform better
 * - Make data-driven decisions to optimize conversions
 */

import { v4 as uuidv4 } from 'uuid';

export interface ABTest {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'completed';
  startDate: Date;
  endDate?: Date;
  variations: ABVariation[];
  targetAudience?: string;
  trafficAllocation: number; // 0-100 percentage
  successMetric: string;
  minimumSampleSize: number;
}

export interface ABVariation {
  id: string;
  name: string;
  description: string;
  trafficAllocation: number; // 0-100 percentage
  component: React.ComponentType<any>;
  props?: any;
  isControl?: boolean;
}

export interface ABTestResult {
  testId: string;
  variationId: string;
  userId: string;
  sessionId: string;
  timestamp: Date;
  event: 'view' | 'click' | 'conversion' | 'bounce';
  metadata?: Record<string, any>;
}

export interface ABTestAnalytics {
  testId: string;
  totalViews: number;
  totalClicks: number;
  totalConversions: number;
  conversionRate: number;
  clickThroughRate: number;
  bounceRate: number;
  variations: {
    [variationId: string]: {
      views: number;
      clicks: number;
      conversions: number;
      conversionRate: number;
      clickThroughRate: number;
      bounceRate: number;
    };
  };
}

class ABTestingFramework {
  private tests: Map<string, ABTest> = new Map();
  private results: ABTestResult[] = [];
  private userId: string;
  private sessionId: string;

  constructor() {
    this.userId = this.getOrCreateUserId();
    this.sessionId = this.getOrCreateSessionId();
  }

  private getOrCreateUserId(): string {
    let userId = localStorage.getItem('ab-testing-user-id');
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('ab-testing-user-id', userId);
    }
    return userId;
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('ab-testing-session-id');
    if (!sessionId) {
      sessionId = uuidv4();
      sessionStorage.setItem('ab-testing-session-id', sessionId);
    }
    return sessionId;
  }

  /**
   * Create a new A/B test
   */
  createTest(test: Omit<ABTest, 'id'>): string {
    const testId = uuidv4();
    const newTest: ABTest = {
      ...test,
      id: testId,
    };
    this.tests.set(testId, newTest);
    this.saveTestsToStorage();
    return testId;
  }

  /**
   * Get active A/B test for a specific test name
   */
  getActiveTest(testName: string): ABTest | null {
    for (const test of this.tests.values()) {
      if (test.name === testName && test.status === 'active') {
        return test;
      }
    }
    return null;
  }

  /**
   * Get user's assigned variation for a test
   */
  getAssignedVariation(testId: string): ABVariation | null {
    const test = this.tests.get(testId);
    if (!test || test.status !== 'active') {
      return null;
    }

    // Check if user is already assigned to a variation
    const assignmentKey = `ab-test-assignment-${testId}`;
    const existingAssignment = localStorage.getItem(assignmentKey);
    
    if (existingAssignment) {
      const variation = test.variations.find(v => v.id === existingAssignment);
      if (variation) {
        return variation;
      }
    }

    // Assign user to a variation based on traffic allocation
    const random = Math.random() * 100;
    let cumulativeAllocation = 0;

    for (const variation of test.variations) {
      cumulativeAllocation += variation.trafficAllocation;
      if (random <= cumulativeAllocation) {
        localStorage.setItem(assignmentKey, variation.id);
        return variation;
      }
    }

    // Fallback to control variation
    const controlVariation = test.variations.find(v => v.isControl);
    if (controlVariation) {
      localStorage.setItem(assignmentKey, controlVariation.id);
      return controlVariation;
    }

    return test.variations[0];
  }

  /**
   * Track an event for A/B testing
   */
  trackEvent(testId: string, variationId: string, event: ABTestResult['event'], metadata?: Record<string, any>): void {
    const result: ABTestResult = {
      testId,
      variationId,
      userId: this.userId,
      sessionId: this.sessionId,
      timestamp: new Date(),
      event,
      metadata,
    };

    this.results.push(result);
    this.saveResultsToStorage();

    // Send to analytics
    this.sendToAnalytics(result);
  }

  /**
   * Get analytics for a specific test
   */
  getTestAnalytics(testId: string): ABTestAnalytics | null {
    const test = this.tests.get(testId);
    if (!test) return null;

    const testResults = this.results.filter(r => r.testId === testId);
    const totalViews = testResults.filter(r => r.event === 'view').length;
    const totalClicks = testResults.filter(r => r.event === 'click').length;
    const totalConversions = testResults.filter(r => r.event === 'conversion').length;
    const totalBounces = testResults.filter(r => r.event === 'bounce').length;

    const analytics: ABTestAnalytics = {
      testId,
      totalViews,
      totalClicks,
      totalConversions,
      conversionRate: totalViews > 0 ? (totalConversions / totalViews) * 100 : 0,
      clickThroughRate: totalViews > 0 ? (totalClicks / totalViews) * 100 : 0,
      bounceRate: totalViews > 0 ? (totalBounces / totalViews) * 100 : 0,
      variations: {},
    };

    // Calculate analytics for each variation
    for (const variation of test.variations) {
      const variationResults = testResults.filter(r => r.variationId === variation.id);
      const variationViews = variationResults.filter(r => r.event === 'view').length;
      const variationClicks = variationResults.filter(r => r.event === 'click').length;
      const variationConversions = variationResults.filter(r => r.event === 'conversion').length;
      const variationBounces = variationResults.filter(r => r.event === 'bounce').length;

      analytics.variations[variation.id] = {
        views: variationViews,
        clicks: variationClicks,
        conversions: variationConversions,
        conversionRate: variationViews > 0 ? (variationConversions / variationViews) * 100 : 0,
        clickThroughRate: variationViews > 0 ? (variationClicks / variationViews) * 100 : 0,
        bounceRate: variationViews > 0 ? (variationBounces / variationViews) * 100 : 0,
      };
    }

    return analytics;
  }

  /**
   * Get all active tests
   */
  getActiveTests(): ABTest[] {
    return Array.from(this.tests.values()).filter(test => test.status === 'active');
  }

  /**
   * Pause a test
   */
  pauseTest(testId: string): void {
    const test = this.tests.get(testId);
    if (test) {
      test.status = 'paused';
      this.saveTestsToStorage();
    }
  }

  /**
   * Complete a test
   */
  completeTest(testId: string): void {
    const test = this.tests.get(testId);
    if (test) {
      test.status = 'completed';
      test.endDate = new Date();
      this.saveTestsToStorage();
    }
  }

  private saveTestsToStorage(): void {
    const testsArray = Array.from(this.tests.values());
    localStorage.setItem('ab-testing-tests', JSON.stringify(testsArray));
  }

  private saveResultsToStorage(): void {
    localStorage.setItem('ab-testing-results', JSON.stringify(this.results));
  }

  private sendToAnalytics(result: ABTestResult): void {
    // Send to Google Analytics or other analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_event', {
        test_id: result.testId,
        variation_id: result.variationId,
        event_type: result.event,
        user_id: result.userId,
        session_id: result.sessionId,
        metadata: result.metadata,
      });
    }
  }

  /**
   * Load tests from storage
   */
  loadTestsFromStorage(): void {
    const stored = localStorage.getItem('ab-testing-tests');
    if (stored) {
      try {
        const testsArray = JSON.parse(stored);
        this.tests.clear();
        for (const test of testsArray) {
          this.tests.set(test.id, test);
        }
      } catch (error) {
        console.error('Error loading A/B tests from storage:', error);
      }
    }
  }

  /**
   * Load results from storage
   */
  loadResultsFromStorage(): void {
    const stored = localStorage.getItem('ab-testing-results');
    if (stored) {
      try {
        this.results = JSON.parse(stored);
      } catch (error) {
        console.error('Error loading A/B test results from storage:', error);
      }
    }
  }
}

// Create singleton instance
export const abTesting = new ABTestingFramework();

// Load data from storage on initialization
abTesting.loadTestsFromStorage();
abTesting.loadResultsFromStorage();
