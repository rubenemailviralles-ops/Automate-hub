import React, { useState } from 'react';
import { Calendar, Send, CheckCircle, Globe, Database, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { useIsMobile } from '../utils/mobileDetection';
import { supabase } from '../lib/supabase';

const ConsultationBooking = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    areaOfService: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    {
      value: 'website-creation',
      label: 'Website Creation',
      icon: Globe,
      description: 'Professional, conversion-optimized websites'
    },
    {
      value: 'crm-integration',
      label: 'CRM Integration',
      icon: Database,
      description: 'Seamless system integration and automation'
    },
    {
      value: 'ai-phone-callers',
      label: 'AI Phone Callers',
      icon: Phone,
      description: 'Never miss a call with AI agents'
    },
    {
      value: 'email-outreach',
      label: 'Email Outreach',
      icon: Mail,
      description: 'Personalized AI-driven email campaigns'
    },
    {
      value: 'full-automation',
      label: 'Full Automation',
      icon: null, // Special case - will show all icons
      description: 'Complete business automation solution'
    }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.areaOfService) {
      newErrors.areaOfService = 'Please select an area of service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the form section when validation fails
      const formSection = document.getElementById('consultation-form');
      if (formSection) {
        formSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company_name: formData.companyName,
            area_of_service: formData.areaOfService,
          }
        ]);

      if (error) throw error;

      alert('Thank you! Your consultation has been booked. We\'ll contact you within 24 hours to confirm your appointment time.');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        areaOfService: ''
      });
      
      // Scroll to top after successful submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting consultation booking:', error);
      alert('There was an error booking your consultation. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = serviceOptions.find(service => service.value === formData.areaOfService);

  return (
    <div className="pt-20">
      <SEO
        title="Book Free AI Automation Consultation | Strategy Session | Automate Hub"
        description="Book your free 30-minute AI automation consultation with Automate Hub experts. Get a custom automation roadmap, ROI analysis, and clear next steps for your business. No pressure, just helpful guidance."
        keywords="free automation consultation, AI automation strategy session, business automation planning, automation roadmap, AI automation experts, automation assessment, business automation consultation, automation strategy"
        canonicalUrl="https://automate-hub.com/book-consultation"
      />
      {/* Split Screen Hero with Form */}
      <section className="min-h-screen py-12 seamless-section relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="animate-slide-in-left">
              <div 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm mobile-3d-tilt"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(59, 130, 246, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(59, 130, 246, 0.2)';
                }}
              >
                <Calendar className="w-4 h-4 text-blue-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-blue-400 font-medium text-sm" style={{ transform: 'translateZ(5px)' }}>Free Consultation</span>
              </div>

              <TypeWriter 
                text="Book Your Free" 
                as="h1"
                className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
                delay={100}
              >
                <span className={`block ${isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'}`}>
                  Strategy Session
                </span>
              </TypeWriter>

              <ScrollReveal delay={200}>
                <p className="text-base text-gray-400 mb-8 leading-relaxed">
                  Ready to transform your business with AI automation? Explore our <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors">website development</Link>, <Link to="/crm-integration" className="text-purple-400 hover:text-purple-300 transition-colors">CRM automation</Link>, <Link to="/phone-callers" className="text-indigo-400 hover:text-indigo-300 transition-colors">AI calling services</Link>, and <Link to="/email-outreach" className="text-pink-400 hover:text-pink-300 transition-colors">email marketing automation</Link>. <Link to="/#roi-calculator" className="text-green-400 hover:text-green-300 transition-colors font-semibold">Check your ROI potential</Link> then schedule a personalized consultation.
                </p>
              </ScrollReveal>

              <div className="space-y-4 mb-8">
                <ScrollReveal delay={300}>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">100% Free</h3>
                      <p className="text-gray-400 text-sm">No hidden costs or obligations</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">30 Minute Session</h3>
                      <p className="text-gray-400 text-sm">Focused strategy discussion</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Custom Plan</h3>
                      <p className="text-gray-400 text-sm">Tailored recommendations for your business</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={600}>
                <div 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-4 mobile-3d-tilt relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.1s ease-out, border-color 0.3s',
                    perspective: '1000px',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 40;
                    const rotateY = (centerX - x) / 40;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                  }}
                >
                  <p className="text-gray-300 text-sm" style={{ transform: 'translateZ(10px)' }}>
                    <span className="text-white font-bold">What you'll get:</span> Expert insights, automation roadmap, ROI analysis, and clear next steps—all in one session.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side - Form */}
            <div className="animate-slide-in-right">
              <div 
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl mobile-3d-popup relative"
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
                <div className="mb-6" style={{ transform: 'translateZ(10px)' }}>
                  <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Consultation</h2>
                  <p className="text-gray-400 text-sm">
                    Fill out the form and we'll contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.fullName 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-400 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.companyName 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="Your Company Inc."
                />
                {errors.companyName && (
                  <p className="text-red-400 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Area of Service */}
              <div>
                <label htmlFor="areaOfService" className="block text-sm font-medium text-gray-400 mb-2">
                  Area of Service *
                </label>
                <div className="relative">
                  <select
                    id="areaOfService"
                    name="areaOfService"
                    value={formData.areaOfService}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black border rounded-xl text-white focus:outline-none transition-all appearance-none cursor-pointer ${
                      errors.areaOfService 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-white/20 focus:border-white/40'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.areaOfService && (
                  <p className="text-red-400 text-xs mt-1">{errors.areaOfService}</p>
                )}

              </div>

              {/* Submit Button */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-xl font-bold flex items-center justify-center mt-6 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-out, background-color 0.3s, box-shadow 0.3s ease-out',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(255, 255, 255, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      <span>Book Free Consultation</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-gray-500 text-xs text-center mt-4">
                By submitting, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                What to Expect From Your Consultation
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery Call</h3>
                <p className="text-gray-400">
                  We'll discuss your current challenges, goals, and business processes to understand your needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Analysis</h3>
                <p className="text-gray-400">
                  We'll analyze your specific situation and identify the best automation opportunities for your business.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy Recommendations</h3>
                <p className="text-gray-400">
                  Get a clear roadmap with specific recommendations tailored to your business and budget.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                <p className="text-gray-400">
                  We'll outline clear next steps, timeline, and investment required to achieve your automation goals.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={500}>
            <div 
              className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-green-500/30 rounded-2xl p-8 text-center mobile-3d-tilt relative"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.1s ease-out, border-color 0.3s',
                perspective: '1000px',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 40;
                const rotateY = (centerX - x) / 40;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4" style={{ transform: 'translateZ(15px)' }}>Why Book a Consultation?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" style={{ transform: 'translateZ(10px)' }}>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Get expert insights into your automation potential
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Understand exactly how AI can help your specific business
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Learn about ROI and cost savings opportunities
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Receive a custom automation roadmap
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    No pressure sales - just helpful guidance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Connect with automation experts who understand your industry
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationBooking;