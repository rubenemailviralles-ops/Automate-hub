import React from 'react';
import { Cookie, Settings, Eye, Shield, BarChart3, Target } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Cookie className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-400 font-medium">Cookie Usage & Tracking</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Cookie
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-white">Last Updated:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparency</h3>
              <p className="text-gray-400 text-sm">We clearly explain what cookies we use and why we use them.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Your Control</h3>
              <p className="text-gray-400 text-sm">You can manage and control cookie settings through your browser.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Privacy First</h3>
              <p className="text-gray-400 text-sm">We respect your privacy and only use necessary cookies for functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12">
            <div className="prose prose-invert max-w-none">
              
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Cookie className="w-8 h-8 mr-3" />
                What Are Cookies?
              </h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  Cookies are small text files that are stored on your device when you visit a website. They help websites 
                  remember information about your visit, such as your preferred language and other settings. This can make 
                  your next visit easier and the site more useful to you.
                </p>
                <p className="text-gray-400 mb-6">
                  Cookies play an important role in enhancing your browsing experience by enabling websites to remember 
                  your preferences, keep you logged in, and provide personalized content.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">How We Use Cookies</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  Automate Hub uses cookies to improve your experience on our website and to help us understand how our 
                  site is being used. We use cookies for the following purposes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Settings className="w-6 h-6 text-blue-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">Essential Cookies</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                      These cookies are necessary for the website to function properly. They enable basic features like 
                      page navigation and access to secure areas.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="w-6 h-6 text-green-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">Analytics Cookies</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and 
                      reporting information anonymously.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Target className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">Marketing Cookies</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                      These cookies track your online activity to help advertisers deliver more relevant advertising 
                      or to limit how many times you see an ad.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Eye className="w-6 h-6 text-orange-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">Preference Cookies</h3>
                    </div>
                    <p className="text-gray-400 text-sm">
                      These cookies remember your preferences and settings to provide you with a more personalized 
                      experience on future visits.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Types of Cookies We Use</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">First-Party Cookies</h3>
                <p className="text-gray-400 mb-6">
                  These are cookies set directly by our website. We use first-party cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>Remember your login status and preferences</li>
                  <li>Maintain your session while browsing our site</li>
                  <li>Store items in your shopping cart or form data</li>
                  <li>Analyze website traffic and user behavior</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Third-Party Cookies</h3>
                <p className="text-gray-400 mb-6">
                  These are cookies set by external services we use on our website:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li><strong className="text-white">Google Analytics:</strong> To understand website usage and improve our services</li>
                  <li><strong className="text-white">Social Media Plugins:</strong> To enable sharing and social media integration</li>
                  <li><strong className="text-white">Customer Support Tools:</strong> To provide live chat and support services</li>
                  <li><strong className="text-white">Marketing Platforms:</strong> To track conversions and optimize advertising</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Cookie Duration</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Session Cookies</h3>
                <p className="text-gray-400 mb-6">
                  These temporary cookies are deleted when you close your browser. They help maintain your session 
                  while you navigate through our website.
                </p>

                <h3 className="text-xl font-bold text-white mb-4">Persistent Cookies</h3>
                <p className="text-gray-400 mb-6">
                  These cookies remain on your device for a set period or until you delete them. They help us 
                  recognize you when you return to our website and remember your preferences.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-400 mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies from being set</li>
                  <li>Set preferences for third-party cookies</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-4">Browser-Specific Instructions</h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                  <ul className="space-y-3 text-gray-400">
                    <li><strong className="text-white">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                    <li><strong className="text-white">Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li><strong className="text-white">Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Impact of Disabling Cookies</h3>
                <p className="text-gray-400 mb-6">
                  Please note that disabling cookies may affect the functionality of our website. Some features may not 
                  work properly, and you may need to re-enter information that would normally be remembered.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-4">
                  We use several third-party services that may set their own cookies:
                </p>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Google Analytics</h4>
                    <p className="text-gray-400 text-sm">
                      Helps us understand website usage patterns. You can opt out at: 
                      <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-400 hover:text-blue-300 ml-1">Google Analytics Opt-out</a>
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-4">
                    <h4 className="text-lg font-bold text-white mb-2">Social Media Platforms</h4>
                    <p className="text-gray-400 text-sm">
                      Social sharing buttons may set cookies from platforms like LinkedIn and Twitter. 
                      Check their privacy policies for more information.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Updates to This Policy</h2>
              
              <div className="mb-12">
                <p className="text-gray-400 mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                  updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              
              <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-2xl p-8">
                <p className="text-gray-300 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@automatehub.com" className="text-orange-400 hover:text-orange-300">privacy@automatehub.com</a></p>
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

export default CookiePolicy;