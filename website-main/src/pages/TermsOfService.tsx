import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-600/20 border border-green-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Scale className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Legal Terms & Conditions</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Terms of
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              These terms govern your use of our services. Please read them carefully before using our platform.
            </p>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clear Terms</h3>
              <p className="text-gray-400 text-sm">Straightforward terms written in plain language for easy understanding.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fair Usage</h3>
              <p className="text-gray-400 text-sm">Reasonable terms that protect both your rights and our business interests.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mutual Respect</h3>
              <p className="text-gray-400 text-sm">Terms based on mutual respect and professional business relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Acceptance of Terms
              </h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  By accessing or using Automate Hub's services, you agree to be bound by these Terms of Service and all applicable 
                  laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
                <p className="text-gray-400 mb-6">
                  These terms apply to all visitors, users, and others who access or use our services, including our website, 
                  AI automation tools, and related services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Service Description</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">Automate Hub provides AI automation services including:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Website creation and development services</li>
                  <li>CRM integration and automation solutions</li>
                  <li>AI chatbot development and deployment</li>
                  <li>Automated appointment setting systems</li>
                  <li>AI phone caller services</li>
                  <li>Email outreach automation</li>
                  <li>Custom automation solutions</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">User Accounts and Registration</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">To access certain features of our services, you may be required to create an account. You agree to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Acceptable Use Policy</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">You agree not to use our services to:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, offensive, or illegal content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use our services for spam or unsolicited communications</li>
                  <li>Engage in any fraudulent or deceptive practices</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  Violation of this policy may result in immediate termination of your access to our services.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Payment Terms</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Fees and Billing</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>All fees are quoted in USD and are non-refundable unless otherwise specified</li>
                  <li>Payment is due according to the terms specified in your service agreement</li>
                  <li>Late payments may incur additional fees and service suspension</li>
                  <li>We reserve the right to change our pricing with 30 days' notice</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Refund Policy</h3>
                <p className="text-gray-400 mb-6">
                  Refunds are handled on a case-by-case basis. For custom development work, refunds may be prorated based on 
                  work completed. Contact us within 30 days of service delivery to discuss refund eligibility.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Our Rights</h3>
                <p className="text-gray-400 mb-4">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
                  software, and design, are owned by Automate Hub and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Your Rights</h3>
                <p className="text-gray-400 mb-4">
                  Upon full payment for custom development services, you retain ownership of:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Custom website designs and content you provide</li>
                  <li>Your business data and customer information</li>
                  <li>Custom automation workflows specific to your business</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  We retain rights to our proprietary technology, frameworks, and general methodologies used in service delivery.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3" />
                Disclaimers and Limitations
              </h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Service Availability</h3>
                <p className="text-gray-400 mb-6">
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability. We are not liable 
                  for temporary service interruptions due to maintenance, technical issues, or circumstances beyond our control.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">AI Service Limitations</h3>
                <p className="text-gray-400 mb-6">
                  Our AI services are designed to assist and automate business processes, but they are not infallible. 
                  You acknowledge that AI systems may occasionally produce unexpected results, and you should implement 
                  appropriate oversight and quality control measures.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Limitation of Liability</h3>
                <p className="text-gray-400 mb-6">
                  To the maximum extent permitted by law, Automate Hub shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Data Protection and Privacy</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                  which is incorporated into these terms by reference. By using our services, you consent to the collection and 
                  use of information as described in our Privacy Policy.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Termination</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">Either party may terminate service agreements:</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>With 30 days' written notice for ongoing services</li>
                  <li>Immediately for material breach of these terms</li>
                  <li>Immediately for non-payment of fees</li>
                </ul>
                <p className="text-gray-400 mb-6">
                  Upon termination, you will lose access to our services, but we will provide reasonable assistance in 
                  data export and transition, subject to our data retention policies.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  These terms are governed by and construed in accordance with the laws of the State of California, 
                  without regard to conflict of law principles. Any disputes arising from these terms or our services 
                  will be resolved through binding arbitration in San Francisco, California.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Changes to Terms</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  We reserve the right to modify these terms at any time. We will notify users of material changes via 
                  email or prominent notice on our website at least 30 days before the changes take effect. 
                  Continued use of our services after changes become effective constitutes acceptance of the new terms.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-green-500/30 rounded-2xl p-8">
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:legal@automatehub.com" className="text-green-400 hover:text-green-300">legal@automatehub.com</a></p>
                  <p><strong className="text-white">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-white">Address:</strong> Automate Hub, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;