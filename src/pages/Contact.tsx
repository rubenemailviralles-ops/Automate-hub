import React, { useState } from 'react';
import { Send, Phone, Mail, ArrowLeft } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <SEO 
        title="Contact Us - Automate Hub"
        description="Get in touch with Automate Hub for AI automation solutions. Contact us for free consultation and custom automation recommendations."
        keywords="contact, automation, AI, consultation, business automation"
      />
      
      {/* Header */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Contact <span className="text-blue-400">Us</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready to automate your business? Let's talk about how we can help you save time and increase efficiency.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 text-lg">(+27) 82 644 2575</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-lg">automate.hub1@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">What to Expect:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">Free consultation to understand your needs</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">Custom automation recommendations</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">Clear timeline and next steps</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg">No pressure, just helpful guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
            {submitSuccess ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Message Sent!</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
                  <p className="text-gray-400 text-lg">
                    Fill out the form and we'll contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-gray-900/50 border rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all text-lg ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-400'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-gray-900/50 border rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all text-lg ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-400'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-gray-900/50 border rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all text-lg ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-400'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="block text-sm font-semibold text-gray-300 mb-3">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-gray-900/50 border rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all text-lg ${
                        errors.businessName 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-400'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.businessName && (
                      <p className="text-red-400 text-sm mt-2">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-gray-900/50 border rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all text-lg resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-gray-600 focus:border-blue-400'
                      }`}
                      placeholder="Tell us about your automation needs..."
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-8 py-5 rounded-2xl font-bold flex items-center justify-center text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <Send className="mr-3 w-5 h-5" aria-hidden="true" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  <p className="text-sm text-gray-400 text-center pt-4">
                    We'll respond within 24 hours during business hours
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
