import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/20 rounded-full mb-12 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium text-sophisticated">
              Next-Generation AI Automation Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light mb-12 text-white leading-tight animate-fade-in-up heading-sophisticated">
            Scale Your Business with
            <span className="block font-semibold">
              AI Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 text-sophisticated">
            We help businesses automate their operations with AI-powered solutions including chat agents, 
            lead generation systems, and seamless CRM integrations to increase productivity and reduce costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up delay-400">
            <button className="group bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-lg font-medium text-lg transition-all duration-500 hover-pop-button flex items-center justify-center text-sophisticated">
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-white/20 hover:border-white/40 px-10 py-5 rounded-lg font-medium text-lg transition-all duration-500 hover:bg-white/5 hover-pop-button flex items-center justify-center text-sophisticated">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-400 animate-fade-in-up delay-600">
              Trusted by businesses looking to streamline operations and compete more effectively through intelligent automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;