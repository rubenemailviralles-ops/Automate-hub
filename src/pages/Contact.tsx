import React, { useState } from 'react';
import { Send, Phone, Mail, ArrowLeft, CheckCircle, Globe, Database, Mail as MailIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { useIsMobile } from '../utils/mobileDetection';
import { supabase } from '../lib/supabase';
import { navigateBackToHome } from '../utils/scrollToTop';

const Contact = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Just show errors, no scrolling to prevent false triggers
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.businessName,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      alert('Thank you for the message! You will be hearing from us soon.');

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
      <SEO 
        title="Contact Us - Automate Hub | Get in Touch for AI Automation Solutions"
        description="Contact Automate Hub for AI automation solutions. Get free consultation, custom automation recommendations, and expert guidance. Transform your business with our AI-powered automation services."
        keywords="contact automate hub, AI automation consultation, business automation contact, AI automation services, automation consultation, contact us automation"
        ogImageAlt="Contact Automate Hub - AI Automation Solutions Contact Page"
        canonicalUrl="https://automate-hub.com/contact"
      />
      <StructuredData type="Organization" />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('contact.title')}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {t('contact.subtitle')}
                </p>
              </div>

            <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center relative"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">(+27) 82 644 2575</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center relative"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">automate.hub1@gmail.com</p>
                  </div>
                </div>
            </div>

              <div 
                className="bg-gray-800/50 rounded-2xl p-6 relative border border-transparent"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">What to Expect:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>Free consultation to understand your needs</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>Custom automation recommendations for <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">websites</Link>, <Link to="/crm-integration" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">CRM systems</Link>, and <Link to="/phone-callers" className="text-green-400 hover:text-green-300 transition-colors font-semibold">phone systems</Link></span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>Clear timeline and next steps</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>No pressure, just helpful guidance</span>
                  </li>
                </ul>
              </div>
          </div>

          {/* Right Side - Contact Form */}
            <div 
              className="bg-gray-800/40 rounded-3xl p-8 border border-gray-700/50 relative"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                minHeight: '600px', // Prevent height changes from causing scrollbar flicker
              }}
            >
              <div className="mb-6 transition-all duration-500 ease-in-out">
                <h2 className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${submitSuccess ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  {t('contact.sendMessage')}
                </h2>
                <p className={`text-gray-400 text-sm transition-all duration-500 ${submitSuccess ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  Fill out the form and we'll contact you within 24 hours. Or <Link to="/book-consultation" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">book a free consultation</Link> for immediate assistance.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center p-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 animate-fade-in">Thank you for the message!</h3>
                  <p className="text-gray-400 mb-6 animate-fade-in">
                    You will be hearing from us soon. Want faster results?
                  </p>
                  <Link
                    to="/book-consultation"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors animate-fade-in"
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-500 ${submitSuccess ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/20 focus:border-white/40'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none ${
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
                      {t('contact.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none ${
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
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.company')} *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none ${
                        errors.businessName 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/20 focus:border-white/40'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.businessName && (
                      <p className="text-red-400 text-xs mt-1">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/20 focus:border-white/40'
                      }`}
                      placeholder="Tell us about your automation needs..."
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
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
                          : 'bg-white text-black'
                      }`}
                      style={{
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                      {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    We'll respond within 24 hours during business hours
                  </p>
                </form>
              )}
            </div>
        </div>
      </div>
      
      {/* Back to Home - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center">
          <button 
            onClick={() => navigateBackToHome(navigate, location.state)}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
