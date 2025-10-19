import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Database, Phone, Mail, BarChart3, CheckCircle, TrendingUp, Shield, Zap } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

// Lazy load heavy components for better initial load performance
const Calculator = lazy(() => import('../components/Calculator'));
const CTASection = lazy(() => import('../components/CTASection'));

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper to get 3D styles only on desktop
  const get3DStyles = () => {
    if (isMobile) return {};
    
    return {
      transformStyle: 'preserve-3d' as const,
      perspective: '1000px',
    };
  };

  // Helper for inner 3D transforms - only on desktop
  const getInner3DTransform = (zValue: string) => {
    if (isMobile) return {};
    return { transform: `translateZ(${zValue})` };
  };

  // Helper to get gradient classes - solid colors on mobile for performance
  const getGradientClasses = (gradient: string, solidColor: string) => {
    if (isMobile) return solidColor;
    return `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`;
  };

  // 3D tilt effect handlers - only on desktop for performance
  const get3DTiltHandlers = () => {
    if (isMobile) return {};
    
    return {
      onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      },
      onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      }
    };
  };

  // Icon hover handlers - only on desktop for performance
  const getIconHoverHandlers = (scale: string = '1.1') => {
    if (isMobile) return {};
    
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = `translateZ(20px) scale(${scale})`;
      },
      onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
      }
    };
  };

  // Icon hover handlers with box shadow for "Why Choose" section - only on desktop for performance
  const getIconHoverWithShadowHandlers = (shadowColor: string) => {
    if (isMobile) return {};
    
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 12px 30px ${shadowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`;
      },
      onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
      }
    };
  };

  // Badge/button hover handlers - only on desktop for performance
  const getBadgeHoverHandlers = () => {
    if (isMobile) return {};
    
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(255, 255, 255, 0.15)';
      },
      onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateZ(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(255, 255, 255, 0.1)';
      }
    };
  };

  // CTA box hover handlers - only on desktop for performance
  const getCTAHoverHandlers = () => {
    if (isMobile) return {};
    
    return {
      onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(59, 130, 246, 0.3)';
      },
      onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
      }
    };
  };

  // Button hover handlers - only on desktop for performance
  const getButtonHoverHandlers = (withShadow: boolean = true) => {
    if (isMobile) return {};
    
    if (withShadow) {
      return {
        onMouseEnter: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.6)';
        },
        onMouseLeave: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
        }
      };
    } else {
      return {
        onMouseEnter: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
        },
        onMouseLeave: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }
      };
    }
  };

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
      <SEO
        title="Automate Hub - AI Automation Solutions for Business Growth | Chatbots, CRM & More"
        description="Transform your business with AI automation. Professional website creation, CRM integration, AI phone agents, and email outreach solutions. Increase productivity, reduce costs by up to 75%, and scale efficiently."
        keywords="AI automation, business automation, AI chatbots, CRM integration, AI phone agents, email automation, lead generation, workflow automation, business productivity, ROI calculator"
        ogImageAlt="Automate Hub Homepage - AI Automation Platform featuring ROI Calculator, Website Creation, CRM Integration, AI Phone Agents, and Email Automation Services"
        canonicalUrl="https://automate-hub.com/"
      />
      <StructuredData type="Organization" />
      
      {/* Hero Section */}
      <section className="py-16 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  ...get3DStyles(),
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                }}
                {...getBadgeHoverHandlers()}
              >
                <Sparkles className="w-5 h-5 text-white mr-2" style={!isMobile ? { transform: 'translateZ(5px)' } : {}} />
                <span className="text-white font-medium" style={!isMobile ? { transform: 'translateZ(5px)' } : {}}>Next-Gen AI Automation Platform</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Automate Your" 
              as="h1"
              className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
              onComplete={() => setShowSecondLine(true)}
            >
              <span className={`block ${getGradientClasses('from-white to-gray-400', 'text-gray-300')}`}>
                Business Growth
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                Increase productivity and reduce costs with AI automation solutions. From intelligent chatbots to automated systems, 
                we help businesses operate more efficiently and compete effectively.
              </p>
            </ScrollReveal>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-base text-gray-400">
                  Helping businesses streamline operations and reduce costs through intelligent automation solutions
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="roi-calculator">
        <ScrollReveal delay={0}>
          <Suspense fallback={<div className="text-center py-12"><div className="animate-pulse text-gray-400">Loading calculator...</div></div>}>
            <Calculator />
          </Suspense>
        </ScrollReveal>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 seamless-section" data-section-name="our-ai-solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypeWriter 
              text="Our AI Solutions" 
              as="h2"
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              delay={0}
              onComplete={() => setShowSubheading(true)}
            />
            <p 
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              style={{ 
                opacity: showSubheading ? 1 : 0,
                transform: showSubheading ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '200ms'
              }}
            >
              Comprehensive automation services designed to transform every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={get3DStyles()}>
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <div 
                    className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                    style={{
                      ...get3DStyles(),
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      transition: 'transform 0.1s ease-out, border-color 0.5s, background-color 0.5s',
                    }}
                    {...get3DTiltHandlers()}
                  >
                    {/* Shine effect overlay */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                      }}
                    />
                    
                    <div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                      style={{
                        boxShadow: isMobile ? 'none' : '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        ...getInner3DTransform('20px'),
                        transition: isMobile ? 'none' : 'transform 0.3s ease-out',
                      }}
                      {...getIconHoverHandlers()}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white relative" style={getInner3DTransform('15px')}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 relative" style={getInner3DTransform('10px')}>
                      {service.description}
                    </p>

                    <Link
                      to={service.path}
                      state={{ fromSection: 'services' }}
                      className={`inline-flex items-center font-semibold hover:opacity-80 transition-all duration-300 group/link  relative ${isMobile ? 'text-blue-400' : ''}`}
                      style={getInner3DTransform('15px')}
                    >
                      <span className={isMobile ? '' : `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        Learn More
                      </span>
                      <ArrowRight className={`ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isMobile ? '' : `text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}`} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Automate Hub Section */}
      <section id="why-choose-automate-hub" className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose <span className={isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'}>Automate Hub</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your business with proven AI automation solutions that deliver measurable results
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" style={get3DStyles()}>
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  ...get3DStyles(),
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                {...get3DTiltHandlers()}
              >
                <div className="flex items-start mb-6" style={getInner3DTransform('15px')}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    {...getIconHoverWithShadowHandlers('rgba(59, 130, 246, 0.6)')}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div style={getInner3DTransform('10px')}>
                    <h3 className="text-2xl font-bold text-white mb-4">Proven Results & ROI</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Reduce operational costs by up to <span className="text-white font-semibold">75%</span> with intelligent automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Increase productivity with <span className="text-white font-semibold">24/7 AI-powered</span> systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>See measurable improvements in <span className="text-white font-semibold">weeks, not months</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link 
                  to="/about"
                  state={{ fromSection: 'why-choose-automate-hub' }}
                  className={`inline-flex items-center font-semibold hover:opacity-80 transition-all duration-300 group/link ${isMobile ? 'text-blue-400' : ''}`}
                  style={getInner3DTransform('10px')}
                >
                  <span className={isMobile ? '' : 'bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'}>
                    Learn about our approach
                  </span>
                  <ArrowRight className={`ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isMobile ? '' : 'text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text'}`} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  ...get3DStyles(),
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                {...get3DTiltHandlers()}
              >
                <div className="flex items-start mb-6" style={getInner3DTransform('15px')}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    {...getIconHoverWithShadowHandlers('rgba(168, 85, 247, 0.6)')}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div style={getInner3DTransform('10px')}>
                    <h3 className="text-2xl font-bold text-white mb-4">Complete AI Automation Suite</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><Link to="/website-creation" state={{ fromSection: 'why-choose-automate-hub' }} className="text-blue-400 hover:text-blue-300 transition-colors">AI-powered websites</Link> that convert visitors into customers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><Link to="/crm-integration" state={{ fromSection: 'why-choose-automate-hub' }} className="text-blue-400 hover:text-blue-300 transition-colors">Smart CRM integration</Link> for seamless data management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><Link to="/phone-callers" state={{ fromSection: 'why-choose-automate-hub' }} className="text-blue-400 hover:text-blue-300 transition-colors">AI phone agents</Link> and <Link to="/email-outreach" state={{ fromSection: 'why-choose-automate-hub' }} className="text-blue-400 hover:text-blue-300 transition-colors">email automation</Link> for outreach</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link 
                  to="/book-consultation"
                  state={{ fromSection: 'why-choose-automate-hub' }}
                  className={`inline-flex items-center font-semibold hover:opacity-80 transition-all duration-300 group/link ${isMobile ? 'text-purple-400' : ''}`}
                  style={getInner3DTransform('10px')}
                >
                  <span className={isMobile ? '' : 'bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent'}>
                    Book a free consultation
                  </span>
                  <ArrowRight className={`ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isMobile ? '' : 'text-transparent bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text'}`} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  ...get3DStyles(),
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                {...get3DTiltHandlers()}
              >
                <div className="flex items-start mb-6" style={getInner3DTransform('15px')}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    {...getIconHoverWithShadowHandlers('rgba(34, 197, 94, 0.6)')}
                  >
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div style={getInner3DTransform('10px')}>
                    <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><span className="text-white font-semibold">Bank-level encryption</span> for all data transmissions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><span className="text-white font-semibold">GDPR compliant</span> data handling and privacy protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Regular security audits and <span className="text-white font-semibold">99.9% uptime</span> guarantee</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link 
                  to="/privacy-policy"
                  state={{ fromSection: 'why-choose-automate-hub' }}
                  className={`inline-flex items-center font-semibold hover:opacity-80 transition-all duration-300 group/link ${isMobile ? 'text-green-400' : ''}`}
                  style={getInner3DTransform('10px')}
                >
                  <span className={isMobile ? '' : 'bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent'}>
                    View our privacy policy
                  </span>
                  <ArrowRight className={`ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isMobile ? '' : 'text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text'}`} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  ...get3DStyles(),
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                {...get3DTiltHandlers()}
              >
                <div className="flex items-start mb-6" style={getInner3DTransform('15px')}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    {...getIconHoverWithShadowHandlers('rgba(249, 115, 22, 0.6)')}
                  >
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div style={getInner3DTransform('10px')}>
                    <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Start small and <span className="text-white font-semibold">scale as you grow</span> - no limitations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span><span className="text-white font-semibold">Custom solutions</span> tailored to your business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Seamless integration with your <span className="text-white font-semibold">existing tools</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  state={{ fromSection: 'why-choose-automate-hub' }}
                  className={`inline-flex items-center font-semibold hover:opacity-80 transition-all duration-300 group/link ${isMobile ? 'text-orange-400' : ''}`}
                  style={getInner3DTransform('10px')}
                >
                  <span className={isMobile ? '' : 'bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent'}>
                    Get started today
                  </span>
                  <ArrowRight className={`ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform ${isMobile ? '' : 'text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text'}`} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* In-content CTA */}
          <ScrollReveal delay={600}>
            <div 
              className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto text-center mobile-3d-popup"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              }}
              {...getCTAHoverHandlers()}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Join hundreds of businesses already saving time and money with AI automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                    transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                  }}
                  {...getButtonHoverHandlers(true)}
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  style={{
                    transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                  }}
                  {...getButtonHoverHandlers(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Suspense fallback={null}>
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Home;