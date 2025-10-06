import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Privacy & Data Protection</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Privacy
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secure</h3>
              <p className="text-gray-400 text-sm">Your data is encrypted and protected with industry-standard security measures.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent</h3>
              <p className="text-gray-400 text-sm">We clearly explain what data we collect and how we use it.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Your Control</h3>
              <p className="text-gray-400 text-sm">You have full control over your personal information and can request changes anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
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

              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@automatehub.com" className="text-blue-400 hover:text-blue-300">privacy@automatehub.com</a></p>
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

export default PrivacyPolicy;