import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Database, Phone, Mail, BarChart3 } from 'lucide-react';
import CTASection from '../components/CTASection';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (servicePath: string) => {
    if (location.pathname === servicePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(servicePath);
    }
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional, conversion-optimized websites built with cutting-edge technology and AI-powered design.',
      path: '/website-creation',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect your systems with intelligent automation that grows with your business.',
      path: '/crm-integration',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Phone,
      title: 'AI Phone Callers',
      description: 'Never miss a call again. AI agents handle incoming calls professionally, capturing every opportunity.',
      path: '/phone-callers',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email Outreach',
      description: 'Personalized AI-driven email campaigns that engage prospects and drive conversions at scale.',
      path: '/email-outreach',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-subtle delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">Next-Gen AI Automation Platform</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight animate-fade-in-up delay-200">
              Automate Your
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Increase productivity and reduce costs with AI automation solutions. From intelligent chatbots to automated systems, 
              we help businesses operate more efficiently and compete effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-600">
            </div>

            <div className="text-center max-w-3xl mx-auto animate-fade-in-up delay-800">
              <p className="text-lg text-gray-400">
                Helping businesses streamline operations and reduce costs through intelligent automation solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in-up">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Comprehensive automation services designed to transform every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const animationDelay = `delay-${200 + (index * 100)}`;
              
              return (
                <div
                  key={index}
                  className={`group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover-pop animate-scale-in ${animationDelay}`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg animate-float`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button
                    onClick={() => handleServiceClick(service.path)}
                    className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-all duration-300 group animate-bounce-subtle hover-pop-text"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      <CTASection />
    </div>
  );
};

export default Home;