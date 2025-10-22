import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { 
  sanitizeFormData, 
  validateEmail, 
  validateRequired, 
  validatePhone, 
  validateMessage,
  checkRateLimit,
  type FormErrors 
} from '../utils/validation';
import {
  detectBot,
  isDisposableEmail,
  logSecurityEvent,
  performSecurityCheck
} from '../utils/security';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
    honeypot: '' // Anti-bot honeypot field
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState(Date.now()); // Track when form was opened

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🔥 CONTACT FORM SUBMITTED! Form data:', formData);
    
    // TEMPORARILY DISABLE ALL SECURITY CHECKS FOR TESTING
    console.log('🔓 Security checks disabled for testing');

    // Validate all fields
    const newErrors: FormErrors = {};
    
    const nameValidation = validateRequired(formData.name, 'Name');
    if (!nameValidation.isValid) newErrors.name = nameValidation.error!;
    
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) newErrors.email = emailValidation.error!;
    
    const companyValidation = validateRequired(formData.company, 'Company');
    if (!companyValidation.isValid) newErrors.company = companyValidation.error!;
    
    if (formData.phone) {
      const phoneValidation = validatePhone(formData.phone);
      if (!phoneValidation.isValid) newErrors.phone = phoneValidation.error!;
    }
    
    const messageValidation = validateMessage(formData.message, 20);
    if (!messageValidation.isValid) newErrors.message = messageValidation.error!;

    // If there are errors, show them and stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      logSecurityEvent({
        type: 'validation_error',
        timestamp: Date.now(),
        details: 'Form validation failed'
      });
      return;
    }

    // Sanitize form data to prevent XSS attacks
    const sanitizedData = sanitizeFormData(formData);
    
    setIsSubmitting(true);
    
    try {
      console.log('🚀 Submitting contact form to Supabase...', sanitizedData);
      console.log('🔗 Supabase client:', supabase);
      console.log('🔗 Supabase URL:', supabase.supabaseUrl);
      
      // Submit to Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: sanitizedData.name,
            email: sanitizedData.email,
            phone: sanitizedData.phone || null,
            message: sanitizedData.message,
            company: sanitizedData.company,
            budget: sanitizedData.budget
          }
        ]);

      console.log('📊 Supabase response:', { data, error });

      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }

      console.log('✅ Contact form submitted to Supabase successfully');
      alert('Thank you! We\'ll be in touch within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        budget: '',
        honeypot: ''
      });
    } catch (error) {
      console.error('❌ Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = () => {
    // Only navigate if not already on contact page
    if (location.pathname !== '/contact') {
      navigate('/contact');
    }
    // Don't scroll if already on contact page - prevents false triggers
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-sophisticated">
              Let's Discuss Your Automation Needs
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed text-sophisticated">
              Ready to increase productivity and reduce costs with AI automation? Book a free consultation 
              to discover how Automate Hub can help your business operate more efficiently.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+27826442575" 
                  className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-6 h-6 text-black" />
                </a>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Phone</h4>
                  <a href="tel:+27826442575" className="text-gray-500 text-sophisticated hover:text-gray-400 transition-colors">27+ 82 644 2575</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Email</h4>
                  <p className="text-gray-500 text-sophisticated">hello@automatehub.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Office</h4>
                  <p className="text-gray-500 text-sophisticated">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/5 border border-white/20 rounded-2xl">
              <h4 className="text-lg font-medium text-white mb-4 heading-sophisticated">What to Expect:</h4>
              <ul className="space-y-3 text-gray-500 text-sophisticated">
                <li>• 30-minute consultation</li>
                <li>• Custom automation recommendations</li>
                <li>• Clear next steps and timeline</li>
                <li>• No pressure, just helpful guidance</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl font-light mb-8 text-white heading-sophisticated">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-black border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-black border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated`}
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    maxLength={100}
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-black border ${errors.company ? 'border-red-500' : 'border-white/20'} rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated`}
                    placeholder="Your Company"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={20}
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 bg-black border ${errors.phone ? 'border-red-500' : 'border-white/20'} rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated`}
                    placeholder="+1 (555) 123-4567"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                  Monthly Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              {/* Honeypot field - hidden from humans, visible to bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website (leave blank)</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                  Tell us about your goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-black border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all resize-none text-sophisticated`}
                  placeholder="Describe your current challenges and what you'd like to achieve with AI automation..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100 hover:scale-105'} text-black px-8 py-5 rounded-xl font-medium text-lg transition-all duration-500 transform flex items-center justify-center text-sophisticated`}
              >
                <Send className="mr-2 w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Book My Free Consultation'}
              </button>

              {/* TEST BUTTON - BYPASS ALL SECURITY */}
              <button
                type="button"
                onClick={async () => {
                  console.log('🧪 TEST BUTTON CLICKED - Bypassing all security');
                  try {
                    const { data, error } = await supabase
                      .from('contact_submissions')
                      .insert([{
                        name: 'TEST USER',
                        email: 'test@example.com',
                        message: 'TEST MESSAGE FROM BUTTON'
                      }])
                      .select();
                    
                    console.log('🧪 TEST RESULT:', { data, error });
                    if (error) {
                      alert('Test failed: ' + error.message);
                    } else {
                      alert('Test successful! Check your Supabase table.');
                    }
                  } catch (err) {
                    console.error('🧪 TEST ERROR:', err);
                    alert('Test error: ' + err);
                  }
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-medium text-lg transition-all duration-500 transform flex items-center justify-center mt-4"
              >
                🧪 TEST SUPABASE (Bypass Security)
              </button>

              <p className="text-sm text-gray-600 text-center text-sophisticated">
                We'll respond within 2 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;