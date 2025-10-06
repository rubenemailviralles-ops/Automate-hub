import React from 'react';
import { Globe, Smartphone, Search, Zap, Palette, Code } from 'lucide-react';
import CTASection from '../components/CTASection';

const WebsiteCreation = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Globe className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Professional Web Development</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Websites That
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Convert Visitors
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your website is your digital storefront. We create conversion-optimized, AI-powered websites that turn 
              visitors into customers and scale with your business growth.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <p className="text-gray-300 text-lg">
                Our websites integrate AI chatbots, automated lead capture, and conversion optimization from day one - 
                turning your site into a <span className="text-white font-bold">24/7 sales machine</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch how our websites convert visitors into customers with AI-powered features
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-3xl p-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Mock Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                  https://your-business.com
                </div>
              </div>

              {/* Mock Website Content */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Transform Your Business Today</h3>
                  <p className="text-blue-100 mb-6">Professional services that drive results</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 animate-pulse">
                    Get Started Now
                  </button>
                </div>
                
                {/* Floating Elements Animation */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce-subtle delay-1000"></div>
              </div>

              {/* Features Section */}
              <div className="p-8 bg-gray-50">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center animate-fade-in delay-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">Mobile First</h4>
                  </div>
                  <div className="text-center animate-fade-in delay-400">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">SEO Ready</h4>
                  </div>
                  <div className="text-center animate-fade-in delay-600">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">AI Powered</h4>
                  </div>
                </div>
              </div>

              {/* Conversion Tracking Animation */}
              <div className="bg-green-50 border-t-4 border-green-500 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-800 font-semibold text-sm">🎯 Visitor converted to lead!</span>
                  <div className="flex items-center space-x-2 animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-xs">Real-time tracking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-300 text-lg">
                ✨ <span className="text-white font-bold">Mobile-optimized</span> • 
                <span className="text-white font-bold"> SEO-ready</span> • 
                <span className="text-white font-bold"> Conversion-focused</span> ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              What Makes Our Websites Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Mobile-First Design</h3>
              <p className="text-gray-400">
                Optimized for mobile devices where 60% of web traffic originates. Fast loading, intuitive navigation.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">SEO Optimized</h3>
              <p className="text-gray-400">
                Built with search engine optimization in mind. Technical SEO, fast loading speeds, and clean code structure.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI Integration</h3>
              <p className="text-gray-400">
                Built-in AI chatbots, automated lead capture forms, and intelligent user behavior tracking.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Custom Design</h3>
              <p className="text-gray-400">
                Unique designs tailored to your brand identity. No templates - every website is built from scratch.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Modern Technology</h3>
              <p className="text-gray-400">
                Built with the latest web technologies for maximum performance, security, and scalability.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Conversion Focused</h3>
              <p className="text-gray-400">
                Every element is designed to guide visitors toward taking action. Optimized for maximum conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Our Website Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
              <p className="text-gray-400">
                We analyze your business, target audience, and competitors to create the perfect strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-400">
                Custom wireframes and designs that reflect your brand and optimize for conversions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-400">
                Clean, fast code with AI integrations, SEO optimization, and mobile responsiveness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Launch</h3>
              <p className="text-gray-400">
                Thorough testing, optimization, and launch with ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default WebsiteCreation;