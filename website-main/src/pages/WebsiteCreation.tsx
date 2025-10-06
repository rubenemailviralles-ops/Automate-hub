import React from 'react';
import { Globe, Smartphone, Search, Zap, Palette, Code } from 'lucide-react';
import CTASection from '../components/CTASection';

const WebsiteCreation = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5"></div>
        
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

      {/* Features Section */}
      <section className="py-24 bg-transparent">
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
      <section className="py-24 bg-transparent">
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