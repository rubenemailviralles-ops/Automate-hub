import React, { useState } from 'react';
import { Calendar, Send, CheckCircle, Globe, Database, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultationBooking = () => {
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Consultation booking submitted:', formData);
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
      alert('There was an error booking your consultation. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = serviceOptions.find(service => service.value === formData.areaOfService);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
              <Calendar className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Free Consultation Booking</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight animate-fade-in-up delay-200">
              Book Your Free
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Strategy Session
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Ready to transform your business with AI automation? Schedule a personalized consultation where we'll 
              We'll respond within 24 hours during business hours to schedule your consultation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in-up delay-600">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">100% Free</h3>
                <p className="text-gray-400 text-sm">No hidden costs or obligations</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">30 Minutes</h3>
                <p className="text-gray-400 text-sm">Focused strategy session</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Custom Plan</h3>
                <p className="text-gray-400 text-sm">Tailored recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="consultation-form" className="py-24 seamless-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
              <p className="text-gray-400">
                Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.fullName 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.phone 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-400 mb-3">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.companyName 
                      ? 'border-red-500 focus:border-red-400' 
                      : 'border-white/20 focus:border-white/40'
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="text-red-400 text-sm mt-2">{errors.companyName}</p>
                )}
              </div>

              {/* Area of Service */}
              <div>
                <label htmlFor="areaOfService" className="block text-sm font-medium text-gray-400 mb-3">
                  Area of Service *
                </label>
                <div className="relative">
                  <select
                    id="areaOfService"
                    name="areaOfService"
                    value={formData.areaOfService}
                    onChange={handleChange}
                    className={`w-full px-5 py-5 bg-black border rounded-xl text-white focus:outline-none transition-all appearance-none cursor-pointer leading-normal ${
                      errors.areaOfService 
                        ? 'border-red-500 focus:border-red-400' 
                        : 'border-white/20 focus:border-white/40'
                    }`}
                  >
                    <option value="">Select the service you're interested in</option>
                    {serviceOptions.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.areaOfService && (
                  <p className="text-red-400 text-sm mt-2">{errors.areaOfService}</p>
                )}

                {/* Selected Service Preview */}
                {selectedService && selectedService.value !== 'full-automation' && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <selectedService.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{selectedService.label}</h4>
                        <p className="text-gray-400 text-sm">{selectedService.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Full Automation Preview with All Icons */}
                {selectedService && selectedService.value === 'full-automation' && (
                  <div className="mt-4 p-6 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-xl">
                    <div className="text-center mb-4">
                      <h4 className="text-white font-semibold text-lg mb-2">Full Automation</h4>
                      <p className="text-gray-400 text-sm">Complete business automation solution</p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium text-center">Website Creation</span>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium text-center">CRM Integration</span>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium text-center">AI Phone Callers</span>
                      </div>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium text-center">Email Outreach</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-gray-300 text-sm text-center">
                        <span className="text-white font-bold">All-in-one solution:</span> Website + CRM + AI Phone + Email automation
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-2xl ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-black hover:bg-gray-100 hover-pop-button'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Booking Your Consultation...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Book My Free Consultation
                  </>
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              What to Expect From Your Consultation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery Call</h3>
              <p className="text-gray-400">
                We'll discuss your current challenges, goals, and business processes to understand your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Analysis</h3>
              <p className="text-gray-400">
                We'll analyze your specific situation and identify the best automation opportunities for your business.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy Recommendations</h3>
              <p className="text-gray-400">
                Get a clear roadmap with specific recommendations tailored to your business and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
              <p className="text-gray-400">
                We'll outline clear next steps, timeline, and investment required to achieve your automation goals.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-green-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Why Book a Consultation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
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