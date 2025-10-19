/**
 * Example A/B Tests for Conversion Optimization
 * 
 * This file contains pre-configured A/B tests that can be easily
 * implemented to optimize key conversion points on the website.
 */

import { ABTest } from './abTesting';
import { HeroSectionVariations, CTAButtonVariations, FormVariations } from '../components/ABTestComponents';

/**
 * Hero Section A/B Test
 * Tests different approaches to the main hero section
 */
export const heroSectionTest: Omit<ABTest, 'id'> = {
  name: 'Hero Section Optimization',
  description: 'Test different hero section approaches to improve conversion rates',
  status: 'active',
  startDate: new Date(),
  variations: [
    {
      id: 'control',
      name: 'Control',
      description: 'Original hero section',
      trafficAllocation: 25,
      component: HeroSectionVariations.control,
      isControl: true,
    },
    {
      id: 'urgency',
      name: 'Urgency',
      description: 'Urgency-focused messaging',
      trafficAllocation: 25,
      component: HeroSectionVariations.urgency,
    },
    {
      id: 'social-proof',
      name: 'Social Proof',
      description: 'Social proof and testimonials',
      trafficAllocation: 25,
      component: HeroSectionVariations.socialProof,
    },
    {
      id: 'benefits',
      name: 'Benefits',
      description: 'Benefit-focused messaging',
      trafficAllocation: 25,
      component: HeroSectionVariations.benefits,
    },
  ],
  trafficAllocation: 100,
  successMetric: 'conversion',
  minimumSampleSize: 1000,
};

/**
 * CTA Button A/B Test
 * Tests different call-to-action button text and styling
 */
export const ctaButtonTest: Omit<ABTest, 'id'> = {
  name: 'CTA Button Optimization',
  description: 'Test different CTA button approaches to improve click-through rates',
  status: 'active',
  startDate: new Date(),
  variations: [
    {
      id: 'control',
      name: 'Control',
      description: 'Original CTA button',
      trafficAllocation: 33,
      component: CTAButtonVariations.control,
      isControl: true,
    },
    {
      id: 'urgency',
      name: 'Urgency',
      description: 'Urgency-focused CTA',
      trafficAllocation: 33,
      component: CTAButtonVariations.urgency,
    },
    {
      id: 'value',
      name: 'Value',
      description: 'Value-focused CTA',
      trafficAllocation: 34,
      component: CTAButtonVariations.value,
    },
  ],
  trafficAllocation: 100,
  successMetric: 'click',
  minimumSampleSize: 500,
};

/**
 * Contact Form A/B Test
 * Tests different form approaches to improve conversion rates
 */
export const contactFormTest: Omit<ABTest, 'id'> = {
  name: 'Contact Form Optimization',
  description: 'Test different contact form approaches to improve form completion rates',
  status: 'active',
  startDate: new Date(),
  variations: [
    {
      id: 'control',
      name: 'Control',
      description: 'Original contact form',
      trafficAllocation: 33,
      component: FormVariations.control,
      isControl: true,
    },
    {
      id: 'simplified',
      name: 'Simplified',
      description: 'Simplified form with fewer fields',
      trafficAllocation: 33,
      component: FormVariations.simplified,
    },
    {
      id: 'trust',
      name: 'Trust',
      description: 'Trust-focused form with security messaging',
      trafficAllocation: 34,
      component: FormVariations.trust,
    },
  ],
  trafficAllocation: 100,
  successMetric: 'conversion',
  minimumSampleSize: 300,
};

/**
 * Navigation A/B Test
 * Tests different navigation approaches
 */
export const navigationTest: Omit<ABTest, 'id'> = {
  name: 'Navigation Optimization',
  description: 'Test different navigation approaches to improve user engagement',
  status: 'active',
  startDate: new Date(),
  variations: [
    {
      id: 'control',
      name: 'Control',
      description: 'Original navigation',
      trafficAllocation: 50,
      component: null, // This would be handled in the Header component
      isControl: true,
    },
    {
      id: 'simplified',
      name: 'Simplified',
      description: 'Simplified navigation with fewer items',
      trafficAllocation: 50,
      component: null,
    },
  ],
  trafficAllocation: 100,
  successMetric: 'click',
  minimumSampleSize: 200,
};

/**
 * Pricing Page A/B Test
 * Tests different pricing page approaches
 */
export const pricingPageTest: Omit<ABTest, 'id'> = {
  name: 'Pricing Page Optimization',
  description: 'Test different pricing page approaches to improve conversion rates',
  status: 'active',
  startDate: new Date(),
  variations: [
    {
      id: 'control',
      name: 'Control',
      description: 'Original pricing page',
      trafficAllocation: 50,
      component: null,
      isControl: true,
    },
    {
      id: 'value-focused',
      name: 'Value Focused',
      description: 'Value-focused pricing page',
      trafficAllocation: 50,
      component: null,
    },
  ],
  trafficAllocation: 100,
  successMetric: 'conversion',
  minimumSampleSize: 400,
};

/**
 * All available A/B tests
 */
export const availableABTests = [
  heroSectionTest,
  ctaButtonTest,
  contactFormTest,
  navigationTest,
  pricingPageTest,
];

/**
 * Initialize all A/B tests
 */
export const initializeABTests = () => {
  const { abTesting } = require('./abTesting');
  
  availableABTests.forEach(test => {
    // Check if test already exists
    const existingTest = abTesting.getActiveTest(test.name);
    if (!existingTest) {
      abTesting.createTest(test);
    }
  });
};
