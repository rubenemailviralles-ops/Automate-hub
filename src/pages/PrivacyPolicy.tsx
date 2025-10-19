import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, Globe, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import TypeWriter from '../components/TypeWriter';
import SEO from '../components/SEO';
import { useIsMobile } from '../utils/mobileDetection';
import { navigateBackToHome } from '../utils/scrollToTop';

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="pt-20">
      <SEO
        title="Privacy Policy | Data Protection & Security | Automate Hub"
        description="Learn how Automate Hub protects your personal information and data. Our comprehensive privacy policy covers data collection, usage, security measures, and your rights regarding personal information."
        keywords="privacy policy, data protection, personal information security, data privacy, GDPR compliance, data security, privacy rights, information protection, data handling, privacy policy"
        canonicalUrl="https://automate-hub.com/privacy-policy"
      />
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
              <Shield className="w-5 h-5 text-blue-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
              <span className="text-blue-400 font-medium" style={{ transform: 'translateZ(5px)' }}>Privacy & Data Protection</span>
            </div>

            <TypeWriter 
              text="Privacy" 
              as="h1"
              className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
            >
              <span className={`block ${isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'}`}>
                Policy
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6 max-w-2xl mx-auto relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <p className="text-gray-300">
                  <strong className="text-white">Last Updated:</strong> January 1, 2025
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-24 seamless-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Your data is encrypted and protected with industry-standard security measures.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Transparent</h3>
                <p className="text-gray-400 text-sm">We clearly explain what data we collect and how we use it.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Your Control</h3>
                <p className="text-gray-400 text-sm">You have full control over your personal information and can request changes anytime.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 seamless-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0}>
            <div 
              className="bg-white/5 border border-white/10 rounded-3xl p-12 mobile-3d-popup relative"
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
              <div className="prose prose-invert max-w-none">
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3" />
                Information We Collect
              </h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                <p className="text-gray-400 mb-4">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and business information</li>
                  <li>Messages and communications you send to us</li>
                  <li>Account credentials and preferences</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Automatically Collected Information</h3>
                <p className="text-gray-400 mb-4">We automatically collect certain information when you use our services:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and search terms</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
                <p className="text-gray-400 mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3" />
                How We Use Your Information
              </h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and marketing communications</li>
                  <li>Analyze usage patterns and optimize our website performance</li>
                  <li>Prevent fraud and ensure the security of our services</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Information Sharing</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li><strong className="text-white">Service Providers:</strong> With trusted third-party vendors who assist in operating our business</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="text-white">Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Data Security</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong className="text-white">Objection:</strong> Object to certain processing of your personal information</li>
                  <li><strong className="text-white">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="text-gray-400">
                  To exercise these rights, please contact us at <a href="mailto:privacy@automatehub.com" className="text-blue-400 hover:text-blue-300">privacy@automatehub.com</a>.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, 
                  we will securely delete or anonymize it.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">International Transfers</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers 
                  are conducted in accordance with applicable data protection laws and that appropriate safeguards are in place to 
                  protect your information.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                  from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Changes to This Policy</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
                  updated policy on our website and updating the "Last Updated" date. Your continued use of our services after 
                  such changes constitutes acceptance of the updated policy.
                </p>
              </div>

            </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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

export default PrivacyPolicy;