import React, { useState, useEffect } from 'react'
import { Download, Smartphone, Monitor, CheckCircle } from 'lucide-react'

const Install: React.FC = () => {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop' | 'unknown'>('unknown')
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent
    if (/iPhone|iPad|iPod/.test(userAgent)) {
      setPlatform('ios')
    } else if (/Android/.test(userAgent)) {
      setPlatform('android')
    } else {
      setPlatform('desktop')
    }

    // Check if already installed (running as standalone app)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    setIsInstalled(isStandalone)
  }, [])

  if (isInstalled) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">App Already Installed!</h2>
          <p className="text-gray-400 mb-6">
            You're using the installed version of Automate Hub Admin.
          </p>
          <p className="text-sm text-gray-500">
            The app will update automatically when new versions are available.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Install Admin App</h1>
        <p className="text-xl text-gray-400">
          Get instant notifications and use the app like a native application
        </p>
      </div>

      {/* Platform-specific guide */}
      {platform === 'android' && (
        <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-700/50 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Smartphone className="w-8 h-8 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Android Installation</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tap the Menu Button</h3>
                  <p className="text-gray-400">Look for the three dots (⋮) in the top-right corner of your browser</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Select "Install app"</h3>
                  <p className="text-gray-400">Tap on "Install app" or "Add to Home screen" in the menu</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tap "Install"</h3>
                  <p className="text-gray-400">Confirm the installation and the app will appear in your app drawer!</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 text-sm">
                <strong>💡 Note:</strong> If you don't see "Install app" in the menu, you might need to use Chrome browser.
              </p>
            </div>
          </div>
        </div>
      )}

      {platform === 'ios' && (
        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-700/50 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Smartphone className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">iPhone Installation</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tap the Share Button</h3>
                  <p className="text-gray-400">Look for the Share icon (⬆️) at the bottom of Safari</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Scroll and Find "Add to Home Screen"</h3>
                  <p className="text-gray-400">Scroll down in the share menu until you see this option</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tap "Add"</h3>
                  <p className="text-gray-400">The app will appear on your home screen with your Automate Hub logo!</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 text-sm">
                <strong>💡 Note:</strong> You must use Safari browser on iPhone. Chrome won't work for installation.
              </p>
            </div>
          </div>
        </div>
      )}

      {platform === 'desktop' && (
        <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-700/50 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Monitor className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Desktop Installation</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Look for Install Icon</h3>
                  <p className="text-gray-400">In Chrome or Edge, look for a ⊕ or 💻 icon in the address bar (top-right area)</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Click "Install"</h3>
                  <p className="text-gray-400">Click the icon and select "Install Automate Hub Admin"</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">App Opens in Own Window</h3>
                  <p className="text-gray-400">The app will open in a standalone window like a desktop application!</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-400 text-sm">
                <strong>💡 Alternative:</strong> Right-click on the page → "Install Automate Hub Admin"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Download APK Option */}
      <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Download className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Want a Real APK File?</h2>
        </div>
        
        <p className="text-gray-400 mb-6">
          You can convert this PWA into a real Android APK file:
        </p>

        <div className="space-y-4">
          <a
            href="https://www.pwabuilder.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors text-center"
          >
            Create APK with PWABuilder →
          </a>
          
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">
              <strong className="text-white">Steps:</strong>
            </p>
            <ol className="text-sm text-gray-400 space-y-1 list-decimal list-inside">
              <li>Click button above to open PWABuilder</li>
              <li>Enter: <code className="text-blue-400 bg-black/50 px-2 py-1 rounded">https://rubenemailviralles-ops.github.io/Automate-hub/admin/</code></li>
              <li>Click "Package for Stores" → Android</li>
              <li>Download the APK file</li>
              <li>Install on your phone!</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
          <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Instant Notifications</h3>
          <p className="text-sm text-gray-400">Get WhatsApp-style alerts for every new lead</p>
        </div>
        
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
          <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Works Offline</h3>
          <p className="text-sm text-gray-400">Access your leads even without internet</p>
        </div>
        
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
          <CheckCircle className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Native Experience</h3>
          <p className="text-sm text-gray-400">Feels like a real app on your device</p>
        </div>
      </div>
    </div>
  )
}

export default Install

