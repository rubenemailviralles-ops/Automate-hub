import React, { useState } from 'react';
import { Send, Phone, Mail, ArrowLeft, CheckCircle, Globe, Database, Mail as MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { useIsMobile } from '../utils/mobileDetection';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const isMobile = useIsMobile();
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
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Automate Hub | Get in Touch for AI Automation Solutions"
        description="Contact Automate Hub for AI automation solutions. Get free consultation, custom automation recommendations, and expert guidance. Transform your business with our AI-powered automation services."
        keywords="contact automate hub, AI automation consultation, business automation contact, AI automation services, automation consultation, contact us automation"
      />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Contact <span className="text-blue-400">Us</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to automate your business? Let's talk about how we can help you save time and increase efficiency.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">(+27) 82 644 2575</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">automate.hub1@gmail.com</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div 
                className="bg-gray-800/50 rounded-2xl p-6 mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
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
                    <span>Custom automation recommendations</span>
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
            </ScrollReveal>
          </div>

          {/* Right Side - Contact Form */}
          <ScrollReveal delay={500}>
            <div 
              className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 mobile-3d-tilt relative"
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
                <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-gray-400 text-sm">
                  Fill out the form and we'll contact you within 24 hours.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
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
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-400 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
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
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all ${
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
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    We'll respond within 24 hours during business hours
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Back to Home - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
