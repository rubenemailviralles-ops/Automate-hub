import React, { useEffect } from 'react';
import { Phone, Clock, TrendingUp, Shield, CheckCircle, ArrowRight, Users, BarChart3, ArrowLeft, Headphones, Network } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CTASection from '../components/CTASection';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import FAQSchema from '../components/FAQSchema';
import { useIsMobile } from '../utils/mobileDetection';
import { navigateBackToHome } from '../utils/scrollToTop';

const PhoneCallers = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  const [isCallActive, setIsCallActive] = React.useState(false);
  const [callStatus, setCallStatus] = React.useState('Ready to call');
  const vapiInstanceRef = React.useRef(null);

  useEffect(() => {
    // Vapi configuration
    const assistant = "ec9c6b34-41ce-4589-b10d-aa52504306a7";
    const apiKey = "6b197fc0-3d91-4e7b-801d-801097fb79ae";

    // Load Vapi SDK
    const loadVapiSDK = () => {
      return new Promise((resolve, reject) => {
        if (window.vapiSDK) {
          resolve(window.vapiSDK);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
        script.defer = true;
        script.async = true;
        script.onload = () => {
          setTimeout(() => resolve(window.vapiSDK), 100);
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Initialize Vapi SDK on mount
    loadVapiSDK().catch(error => {
      console.error('Failed to load Vapi SDK:', error);
      setCallStatus('Failed to load voice system');
    });

    // Cleanup on unmount
    return () => {
      if (vapiInstanceRef.current) {
        try {
          vapiInstanceRef.current.stop();
        } catch (e) {
          console.error('Error stopping Vapi:', e);
        }
        vapiInstanceRef.current = null;
      }
    };
  }, []);

  const handleVapiToggle = async () => {
    const assistant = "ec9c6b34-41ce-4589-b10d-aa52504306a7";
    const apiKey = "6b197fc0-3d91-4e7b-801d-801097fb79ae";

    try {
      if (isCallActive && vapiInstanceRef.current) {
        // Stop the call
        vapiInstanceRef.current.stop();
        vapiInstanceRef.current = null;
        setIsCallActive(false);
        setCallStatus('Call ended');
        setTimeout(() => setCallStatus('Ready to call'), 2000);
      } else {
        // Start the call
        if (!window.vapiSDK) {
          setCallStatus('Loading voice system...');
          return;
        }

        setCallStatus('Connecting...');
        setIsCallActive(true);

        vapiInstanceRef.current = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: {
            name: 'Automate Hub AI Agent',
            firstMessage: 'Hello! I\'m the Automate Hub AI assistant. How can I help you today?',
          }
        });

        // Listen for call events
        if (vapiInstanceRef.current) {
          setCallStatus('Connected - Speaking...');
        }
      }
    } catch (error) {
      console.error('Vapi error:', error);
      setCallStatus('Connection failed');
      setIsCallActive(false);
      vapiInstanceRef.current = null;
      setTimeout(() => setCallStatus('Ready to call'), 3000);
    }
  };
  
  return (
    <div className="pt-20">
      <SEO
        title="AI Phone Agents & Virtual Callers | 24/7 Customer Service Automation | Automate Hub"
        description="Never miss a call with AI phone agents. 24/7 customer service automation, lead qualification, appointment scheduling, and professional call handling. Transform your business communication with intelligent phone systems."
        keywords="AI phone agents, virtual callers, customer service automation, phone automation, AI call handling, 24/7 phone service, lead qualification, appointment scheduling, business phone systems, automated calling"
        canonicalUrl="https://automate-hub.com/phone-callers"
      />
      <ServiceSchema
        serviceName="AI Phone Agents & Virtual Caller Services"
        description="24/7 AI phone agents for customer service automation, lead qualification, appointment scheduling, and professional call handling. Never miss an opportunity with intelligent phone systems."
        serviceType="Phone Automation"
        offers={[
          { name: '24/7 Availability', description: 'Never miss a customer call, day or night' },
          { name: 'Natural Conversations', description: 'AI that sounds human and understands context' },
          { name: 'Lead Qualification', description: 'Automatically score and route qualified leads' },
          { name: 'Appointment Scheduling', description: 'Book meetings directly into your calendar' },
          { name: 'Call Transcription', description: 'Every conversation documented automatically' },
          { name: 'Multi-language Support', description: 'Serve customers in their preferred language' },
        ]}
      />
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full mb-8 backdrop-blur-sm mobile-3d-tilt"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(99, 102, 241, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(99, 102, 241, 0.2)';
                }}
              >
                <Phone className="w-5 h-5 text-indigo-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-indigo-400 font-medium" style={{ transform: 'translateZ(5px)' }}>AI Phone Automation</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Never Miss a" 
              as="h1"
              className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
            >
              <span className={`block ${isMobile ? 'text-indigo-400' : 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'}`}>
                Profitable Call
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Many businesses miss important calls due to unavailability. Our AI phone agents ensure every call 
                is answered professionally, helping you capture more opportunities and serve customers better. <Link to="/#roi-calculator" className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">Calculate your ROI</Link> and 
                discover how much revenue you're losing from missed calls.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/50"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <p className="text-gray-300 text-lg">
                  Our AI phone agents help businesses provide consistent customer service and capture leads 
                  <span className="text-white font-bold"> around the clock</span>, ensuring no opportunity is missed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                AI Phone Agent In Action
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch how our AI handles incoming calls professionally and captures every opportunity
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div 
              className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-3xl p-8 max-w-6xl mx-auto mobile-3d-popup relative"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                perspective: '1000px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) translateZ(20px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) translateZ(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div className="min-h-[420px] flex items-center justify-center" style={{ transform: 'translateZ(10px)' }}>
                <div className="text-center w-full max-w-2xl mx-auto px-6">
                  {/* Animated Avatar Circle */}
                  <div className="relative mb-8">
                    <div 
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative ${isCallActive ? 'animate-pulse' : ''}`}
                      style={{
                        boxShadow: isCallActive 
                          ? '0 0 60px rgba(99, 102, 241, 0.8), 0 0 120px rgba(168, 85, 247, 0.6)' 
                          : '0 20px 60px rgba(0, 0, 0, 0.4)',
                        transition: 'all 0.5s ease-out'
                      }}
                    >
                      {/* Outer ring animation */}
                      {isCallActive && (
                        <>
                          <div 
                            className="absolute inset-0 rounded-full border-4 border-indigo-400 opacity-75"
                            style={{
                              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                            }}
                          ></div>
                          <div 
                            className="absolute inset-0 rounded-full border-4 border-purple-400 opacity-75"
                            style={{
                              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s'
                            }}
                          ></div>
                        </>
                      )}
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {isCallActive ? (
                          <Phone className="w-16 h-16 text-white animate-pulse" />
                        ) : (
                          <Headphones className="w-16 h-16 text-white" />
                        )}
                      </div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <div 
                        className={`w-3 h-3 rounded-full ${isCallActive ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}
                        style={{
                          boxShadow: isCallActive ? '0 0 10px rgba(34, 197, 94, 0.8)' : 'none'
                        }}
                      ></div>
                      <span className={`text-sm font-medium ${isCallActive ? 'text-green-400' : 'text-gray-400'}`}>
                        {callStatus}
                      </span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {isCallActive ? 'AI Agent Live' : 'Experience Our AI Voice Agent'}
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                    {isCallActive 
                      ? 'Our AI is listening and ready to help. Speak naturally and ask anything about our services.'
                      : 'Click the button below to start a live conversation with our AI phone agent. No setup required—just click and speak!'}
                  </p>

                  {/* Control Button */}
                  <button 
                    onClick={handleVapiToggle}
                    className={`group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      isCallActive 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                        : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600'
                    }`}
                    style={{
                      boxShadow: isCallActive
                        ? '0 10px 40px rgba(239, 68, 68, 0.4), 0 0 20px rgba(239, 68, 68, 0.3)'
                        : '0 10px 40px rgba(99, 102, 241, 0.4), 0 0 20px rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      {isCallActive ? (
                        <>
                          <Phone className="w-6 h-6 animate-pulse" />
                          <span>End Call</span>
                        </>
                      ) : (
                        <>
                          <Phone className="w-6 h-6" />
                          <span>Start Voice Demo</span>
                        </>
                      )}
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                  </button>

                  {/* Features List */}
                  {!isCallActive && (
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Natural Voice</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">Real-time Response</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-sm">24/7 Available</span>
                      </div>
                    </div>
                  )}

                  {/* Live Call Info */}
                  {isCallActive && (
                    <div className="mt-10 bg-black/30 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="flex space-x-1">
                          <div className="w-1 h-8 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1 h-10 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-1 h-6 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                          <div className="w-1 h-12 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '450ms' }}></div>
                          <div className="w-1 h-8 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                        </div>
                        <span className="text-green-400 font-semibold">Listening...</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Speak clearly and naturally. The AI will respond in real-time.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <ScrollReveal delay={300}>
                <div className="text-center mt-8">
                  <div className="flex items-center justify-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>100% Professional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                      <span>68% Conversion Rate</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                How Our AI Phone Agents Work
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={100}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>24/7 Availability</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Your AI agent answers every call instantly, day or night, weekends and holidays. No more missed opportunities.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Natural Conversations</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Advanced AI that understands context, handles objections, and guides callers through your sales process naturally.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Lead Qualification</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Automatically qualifies leads, captures contact information, and schedules appointments with hot prospects.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Brand Consistency</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Trained on your specific business, products, and services to maintain perfect brand representation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Instant Follow-up</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Automatically sends follow-up emails, texts, and schedules callbacks based on conversation outcomes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(20px)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                  }}
                >
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>CRM Integration</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Seamlessly logs all call data, lead information, and next steps directly into your existing CRM system.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                The Benefits Are Clear
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Without AI Phone Agents:</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    Many calls go unanswered
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    Missed business opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    Inconsistent customer experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    Manual lead qualification
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">✗</span>
                    Limited business hours
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">After AI Phone Agents:</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Consistent call answering
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Better lead capture
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Perfect brand consistency
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Automated lead qualification
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    24/7/365 availability
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div 
              className="mt-16 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-12 text-center relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/50"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Key Benefits</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI phone agents help businesses provide better customer service, capture more leads, 
                and operate more efficiently with 24/7 availability and consistent professional responses.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Phone Agent Features */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Phone Automation Solution
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Never miss a call with AI-powered phone agents that work 24/7
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div className="flex items-start mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(99, 102, 241, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>What's Included</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">24/7 availability</span> - Never miss a customer call, day or night</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Natural conversations</span> - AI that sounds human and understands context</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Lead qualification</span> - Automatically score and route qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Appointment scheduling</span> - Book meetings directly into your calendar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Call transcription</span> - Every conversation documented automatically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Multi-language support</span> - Serve customers in their preferred language</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                }}
              >
                <div className="flex items-start mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>Integrate with Your System</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sync with <Link to="/crm-integration" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CRM integration</Link> for automatic lead updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Connect with <Link to="/email-outreach" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">email automation</Link> for follow-up campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Link to <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">your website</Link> for seamless lead capture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">SMS integration</span> - Send automated text confirmations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Zapier connectivity</span> - Connect with 5,000+ apps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Custom webhooks</span> - Trigger any action after calls</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* In-content CTA */}
          <ScrollReveal delay={400}>
            <div 
              className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-8 max-w-4xl mx-auto text-center mobile-3d-popup"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Automate Your Calls?
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Start capturing every opportunity with AI phone agents
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
                    transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.4)';
                  }}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400">
                Everything you need to know about AI phone agents
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">How realistic do AI phone agents sound?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our AI phone agents use advanced natural language processing and text-to-speech technology to sound remarkably human. They understand context, can handle complex conversations, respond naturally to interruptions, and adapt their tone appropriately. Most callers don't realize they're speaking with AI, and those who do are impressed by the quality of interaction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Can AI phone agents handle complex customer inquiries?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! Our AI agents are trained on your specific business, products, and services. They can answer detailed questions, provide product information, troubleshoot common issues, and qualify leads. For highly complex or sensitive matters, they can seamlessly transfer to a human agent while providing the agent with full conversation context.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">How do you set up and customize the AI phone system?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Setup typically takes 1-2 weeks. We start by understanding your business, call flows, and common scenarios. Then we train the AI on your specific needs, integrate with your existing phone system and CRM, test thoroughly, and fine-tune responses. You'll have full control over scripts, escalation rules, and how the AI handles different situations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">What happens to call recordings and transcripts?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every call is automatically transcribed and stored securely in your CRM or preferred system. You get full conversation logs, key highlights, sentiment analysis, and action items. All data is encrypted and compliant with privacy regulations. You can search past conversations, analyze trends, and use insights to improve your service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Can the AI book appointments directly into our calendar?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! The AI integrates with popular calendar systems like Google Calendar, Outlook, and Calendly. It checks availability in real-time, books appointments, sends confirmations, and adds reminders. It handles rescheduling, cancellations, and time zone conversions automatically, ensuring your calendar stays perfectly organized.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">What languages do the AI phone agents support?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our AI agents support 20+ languages including English, Spanish, French, German, Mandarin, Japanese, and more. They can detect the caller's language automatically and switch seamlessly, or use a specific language based on your business needs. This allows you to serve international customers without hiring multilingual staff.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/20 hover:bg-white/10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <h3 className="text-xl font-bold text-white mb-3">How much does AI phone automation cost?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Pricing starts at $500/month for basic phone answering service with up to 100 calls. More comprehensive solutions with advanced features, integrations, and higher call volumes range from $1,000-$3,000/month. We offer custom pricing based on your specific needs and call volume. <Link to="/book-consultation" className="text-indigo-400 hover:text-indigo-300 transition-colors">Book a consultation</Link> to discuss pricing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSchema
        faqs={[
          {
            question: 'How realistic do AI phone agents sound?',
            answer: 'Our AI phone agents use advanced natural language processing and text-to-speech technology to sound remarkably human. They understand context, can handle complex conversations, respond naturally to interruptions, and adapt their tone appropriately. Most callers don\'t realize they\'re speaking with AI, and those who do are impressed by the quality of interaction.',
          },
          {
            question: 'Can AI phone agents handle complex customer inquiries?',
            answer: 'Yes! Our AI agents are trained on your specific business, products, and services. They can answer detailed questions, provide product information, troubleshoot common issues, and qualify leads. For highly complex or sensitive matters, they can seamlessly transfer to a human agent while providing the agent with full conversation context.',
          },
          {
            question: 'How do you set up and customize the AI phone system?',
            answer: 'Setup typically takes 1-2 weeks. We start by understanding your business, call flows, and common scenarios. Then we train the AI on your specific needs, integrate with your existing phone system and CRM, test thoroughly, and fine-tune responses. You\'ll have full control over scripts, escalation rules, and how the AI handles different situations.',
          },
          {
            question: 'What happens to call recordings and transcripts?',
            answer: 'Every call is automatically transcribed and stored securely in your CRM or preferred system. You get full conversation logs, key highlights, sentiment analysis, and action items. All data is encrypted and compliant with privacy regulations. You can search past conversations, analyze trends, and use insights to improve your service.',
          },
          {
            question: 'Can the AI book appointments directly into our calendar?',
            answer: 'Yes! The AI integrates with popular calendar systems like Google Calendar, Outlook, and Calendly. It checks availability in real-time, books appointments, sends confirmations, and adds reminders. It handles rescheduling, cancellations, and time zone conversions automatically, ensuring your calendar stays perfectly organized.',
          },
          {
            question: 'What languages do the AI phone agents support?',
            answer: 'Our AI agents support 20+ languages including English, Spanish, French, German, Mandarin, Japanese, and more. They can detect the caller\'s language automatically and switch seamlessly, or use a specific language based on your business needs. This allows you to serve international customers without hiring multilingual staff.',
          },
          {
            question: 'How much does AI phone automation cost?',
            answer: 'Pricing starts at $500/month for basic phone answering service with up to 100 calls. More comprehensive solutions with advanced features, integrations, and higher call volumes range from $1,000-$3,000/month. We offer custom pricing based on your specific needs and call volume.',
          },
        ]}
      />

      <CTASection />

      {/* Back to Homepage */}
      <section className="py-12 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button 
              onClick={() => navigateBackToHome(navigate, location.state)}
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover-pop-text cursor-pointer"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneCallers;