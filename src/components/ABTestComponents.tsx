import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, Star, Zap } from 'lucide-react';

/**
 * A/B Test Components for Conversion Optimization
 * 
 * These components represent different variations of key conversion elements
 * that can be tested to optimize user engagement and conversions.
 */

// Hero Section Variations
export const HeroSectionVariations = {
  // Control: Original hero section
  control: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Transform Your Business with AI Automation
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
        Professional website creation, CRM integration, AI phone agents, and email outreach solutions 
        that increase productivity and reduce costs.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => trackEvent('click', { element: 'cta_button', text: 'Get Started' })}
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Get Started
        </button>
        <button 
          onClick={() => trackEvent('click', { element: 'secondary_button', text: 'Learn More' })}
          className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  ),

  // Variation A: Urgency-focused
  urgency: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="text-center">
      <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6 text-red-400 text-sm font-medium">
        <Sparkles className="w-4 h-4 mr-2" />
        Limited Time: 50% Off First Month
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Don't Let Your Competitors Get Ahead
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
        While you're manually handling tasks, your competitors are automating and scaling. 
        Join 10,000+ businesses already using AI automation to dominate their markets.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => trackEvent('click', { element: 'cta_button', text: 'Claim Your Spot' })}
          className="bg-red-500 text-white hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Claim Your Spot Now
        </button>
        <button 
          onClick={() => trackEvent('click', { element: 'secondary_button', text: 'See Results' })}
          className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          See Results
        </button>
      </div>
    </div>
  ),

  // Variation B: Social proof-focused
  socialProof: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="text-center">
      <div className="flex items-center justify-center mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
          ))}
        </div>
        <span className="ml-3 text-gray-400 text-sm">Join 10,000+ businesses</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Trusted by Industry Leaders
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
        "We increased our conversion rate by 300% in just 3 months" - Sarah Johnson, CEO
        <br />
        "Saved us 40 hours per week" - Mike Chen, Operations Director
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => trackEvent('click', { element: 'cta_button', text: 'Start Your Success Story' })}
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Start Your Success Story
        </button>
        <button 
          onClick={() => trackEvent('click', { element: 'secondary_button', text: 'Read Case Studies' })}
          className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Read Case Studies
        </button>
      </div>
    </div>
  ),

  // Variation C: Benefit-focused
  benefits: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
        Save 40 Hours Per Week
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">3x Faster</h3>
          <p className="text-gray-400 text-sm">Complete tasks in 1/3 the time</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">99% Accuracy</h3>
          <p className="text-gray-400 text-sm">Eliminate human errors</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <Star className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">24/7 Operation</h3>
          <p className="text-gray-400 text-sm">Never stop growing</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button 
          onClick={() => trackEvent('click', { element: 'cta_button', text: 'Get Your 40 Hours Back' })}
          className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
        >
          Get Your 40 Hours Back
        </button>
        <button 
          onClick={() => trackEvent('click', { element: 'secondary_button', text: 'Calculate Savings' })}
          className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Calculate Your Savings
        </button>
      </div>
    </div>
  ),
};

// CTA Button Variations
export const CTAButtonVariations = {
  // Control: Original CTA
  control: ({ trackEvent, href }: { trackEvent: (event: string, metadata?: any) => void; href: string }) => (
    <a
      href={href}
      onClick={() => trackEvent('click', { element: 'cta_button', text: 'Book Consultation' })}
      className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
    >
      Book Consultation
    </a>
  ),

  // Variation A: Urgency
  urgency: ({ trackEvent, href }: { trackEvent: (event: string, metadata?: any) => void; href: string }) => (
    <a
      href={href}
      onClick={() => trackEvent('click', { element: 'cta_button', text: 'Book Free Call Now' })}
      className="bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
    >
      Book Free Call Now
    </a>
  ),

  // Variation B: Value-focused
  value: ({ trackEvent, href }: { trackEvent: (event: string, metadata?: any) => void; href: string }) => (
    <a
      href={href}
      onClick={() => trackEvent('click', { element: 'cta_button', text: 'Get Free Strategy Session' })}
      className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
    >
      Get Free Strategy Session
    </a>
  ),

  // Variation C: Risk-free
  riskFree: ({ trackEvent, href }: { trackEvent: (event: string, metadata?: any) => void; href: string }) => (
    <a
      href={href}
      onClick={() => trackEvent('click', { element: 'cta_button', text: 'Try Risk-Free' })}
      className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
    >
      Try Risk-Free
    </a>
  ),
};

// Form Variations
export const FormVariations = {
  // Control: Original form
  control: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">Send us a message</h2>
      <p className="text-gray-400 text-sm mb-6">
        Fill out the form and we'll contact you within 24 hours.
      </p>
      <form onSubmit={(e) => {
        e.preventDefault();
        trackEvent('conversion', { form_type: 'contact' });
      }}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            onClick={() => trackEvent('click', { element: 'submit_button' })}
            className="w-full bg-white text-black hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  ),

  // Variation A: Simplified form
  simplified: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
      <h2 className="text-2xl font-bold text-white mb-4">Get Started in 30 Seconds</h2>
      <p className="text-gray-400 text-sm mb-6">
        Just your email and we'll send you a personalized automation plan.
      </p>
      <form onSubmit={(e) => {
        e.preventDefault();
        trackEvent('conversion', { form_type: 'simplified' });
      }}>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            onClick={() => trackEvent('click', { element: 'submit_button' })}
            className="w-full bg-white text-black hover:bg-gray-100 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Get My Free Plan
          </button>
        </div>
      </form>
    </div>
  ),

  // Variation B: Trust-focused form
  trust: ({ trackEvent }: { trackEvent: (event: string, metadata?: any) => void }) => (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-4">
        <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
        <h2 className="text-2xl font-bold text-white">100% Secure & Private</h2>
      </div>
      <p className="text-gray-400 text-sm mb-6">
        Your information is encrypted and never shared. We respect your privacy.
      </p>
      <form onSubmit={(e) => {
        e.preventDefault();
        trackEvent('conversion', { form_type: 'trust' });
      }}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <textarea
            placeholder="Tell us about your business"
            rows={4}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/40"
          />
          <button
            type="submit"
            onClick={() => trackEvent('click', { element: 'submit_button' })}
            className="w-full bg-green-500 text-white hover:bg-green-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Send Securely
          </button>
        </div>
      </form>
    </div>
  ),
};
