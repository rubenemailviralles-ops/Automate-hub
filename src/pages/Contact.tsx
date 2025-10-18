import React, { useState } from 'react';
import { Send, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import FormField from '../components/FormField';
import { validateEmail, validateRequired, validatePhone, validateMessage, validateForm, hasFormErrors, FormErrors } from '../utils/validation';
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFieldChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submit triggered!');
    console.log('Form data:', formData);
    setSubmitSuccess(false);

    // Validate all fields
    const validationErrors = validateForm(formData, {
      name: (value) => validateRequired(value, 'Name'),
      email: validateEmail,
      phone: validatePhone,
      businessName: (value) => validateRequired(value, 'Company name'),
      message: (value) => validateMessage(value, 20),
    });

    console.log('Validation errors:', validationErrors);

    if (hasFormErrors(validationErrors)) {
      console.log('Form has validation errors, not submitting');
      setErrors(validationErrors);
      // Focus on first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    console.log('Form validation passed, submitting to Supabase...');
    // Form is valid, submit
    setIsSubmitting(true);

    try {
      console.log('Attempting to insert into Supabase...');
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.businessName,
            message: formData.message,
          }
        ])
        .select();

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Successfully submitted to Supabase!');
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
    <div className="pt-20">
      <SEO
        title="Contact Automate Hub | Get AI Automation Consultation | Free Business Assessment"
        description="Ready to automate your business? Contact Automate Hub for a free AI automation consultation. Get expert guidance on website creation, CRM integration, AI phone agents, and email outreach solutions."
        keywords="contact automate hub, AI automation consultation, business automation assessment, automation experts, AI automation services, business automation consultation, automation planning, AI automation support"
        canonicalUrl="https://automate-hub.com/contact"
      />
      {/* Contact Section */}
      <section className="py-12 seamless-section relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info - Left Side */}
            <div className="lg:pr-8">
              <TypeWriter 
                text="Get In" 
                as="h1"
                className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight"
                delay={100}
              >
                <span className={`block ${isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'}`}>
                  Touch
                </span>
              </TypeWriter>
              <ScrollReveal delay={200}>
                <p className="text-base text-gray-400 mb-8 leading-relaxed">
                  Ready to automate your business operations? Let's discuss how our <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors">professional website creation</Link>, <Link to="/crm-integration" className="text-purple-400 hover:text-purple-300 transition-colors">CRM integration services</Link>, <Link to="/phone-callers" className="text-indigo-400 hover:text-indigo-300 transition-colors">AI phone automation</Link>, and <Link to="/email-outreach" className="text-pink-400 hover:text-pink-300 transition-colors">email outreach solutions</Link> can help
                  increase your productivity and reduce costs. <Link to="/#roi-calculator" className="text-green-400 hover:text-green-300 transition-colors font-semibold">Calculate your ROI</Link> before we talk.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                <ScrollReveal delay={300}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-400">(+27) 82 644 2575</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-400">automate.hub1@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>

              </div>

              <ScrollReveal delay={500}>
                <div 
                  className="mt-8 p-6 bg-white/5 border border-white/20 rounded-2xl mobile-3d-tilt relative"
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
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                  }}
                >
                  <h4 className="text-lg font-medium text-white mb-4" style={{ transform: 'translateZ(15px)' }}>What to Expect:</h4>
                  <ul className="space-y-2 text-gray-400 text-sm" style={{ transform: 'translateZ(10px)' }}>
                    <li>• Free consultation to understand your needs</li>
                    <li>• Custom automation recommendations</li>
                    <li>• Clear timeline and next steps</li>
                    <li>• No pressure, just helpful guidance</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form - Right Side */}
            <ScrollReveal delay={100}>
              <div 
                className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:sticky lg:top-24 mobile-3d-popup relative"
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
                <h3 className="text-2xl font-bold mb-6 text-white" style={{ transform: 'translateZ(10px)' }}>Send Us a Message</h3>
                
                {/* Success message with ARIA live region */}
                {submitSuccess && (
                  <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 flex items-start"
                  >
                    <svg 
                      className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span>Thank you for your message! We'll get back to you within 24 hours.</span>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
                  <FormField
                    id="name"
                    label="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => handleFieldChange('name', value)}
                    error={errors.name}
                    required
                    placeholder="John Doe"
                  />

                  <FormField
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleFieldChange('email', value)}
                    error={errors.email}
                    required
                    placeholder="john@company.com"
                  />

                  <FormField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => handleFieldChange('phone', value)}
                    error={errors.phone}
                    required
                    placeholder="+1 (555) 123-4567"
                  />

                  <FormField
                    id="businessName"
                    label="Company Name"
                    type="text"
                    value={formData.businessName}
                    onChange={(value) => handleFieldChange('businessName', value)}
                    error={errors.businessName}
                    required
                    placeholder="Your Company"
                  />

                  <FormField
                    id="message"
                    label="Message"
                    type="textarea"
                    value={formData.message}
                    onChange={(value) => handleFieldChange('message', value)}
                    error={errors.message}
                    required
                    placeholder="Tell us about your automation needs..."
                    rows={5}
                  />

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                      onClick={(e) => {
                        console.log('Button clicked!');
                        console.log('Form data:', formData);
                        console.log('Is submitting:', isSubmitting);
                      }}
                      aria-label={isSubmitting ? "Sending message..." : "Send message"}
                    >
                      <Send className="mr-2 w-4 h-4" aria-hidden="true" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    We'll respond within 24 hours during business hours
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Back to Homepage */}
      <section className="py-12 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
              aria-label="Navigate back to homepage"
            >
              <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;