import React from 'react'
import { X, ArrowDown, ArrowUp, Share, MoreVertical } from 'lucide-react'

interface InstallGuideProps {
  onClose: () => void
}

const InstallGuide: React.FC<InstallGuideProps> = ({ onClose }) => {
  const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)
  const isAndroid = /Android/.test(navigator.userAgent)

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Install This App</h2>

        {isIOS && (
          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <p className="text-white font-semibold">Tap the Share Button</p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="relative">
                  <Share className="w-12 h-12 text-blue-400" />
                  <ArrowDown className="w-8 h-8 text-yellow-400 absolute -bottom-10 left-1/2 -translate-x-1/2 animate-bounce" />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-8">Look at the bottom of your screen</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <p className="text-white font-semibold">Add to Home Screen</p>
              </div>
              <p className="text-gray-400 text-sm">Scroll down in the menu and tap "Add to Home Screen"</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text-white font-semibold">Tap "Add"</p>
              </div>
              <p className="text-gray-400 text-sm">The app will appear on your home screen!</p>
            </div>
          </div>
        )}

        {isAndroid && (
          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <p className="text-white font-semibold">Tap the Menu</p>
              </div>
              <div className="flex items-center justify-center py-4">
                <div className="relative">
                  <MoreVertical className="w-12 h-12 text-blue-400" />
                  <ArrowUp className="w-8 h-8 text-yellow-400 absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce" />
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-8">Look at the top-right corner</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <p className="text-white font-semibold">Install App</p>
              </div>
              <p className="text-gray-400 text-sm">Tap "Install app" or "Add to Home screen"</p>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text-white font-semibold">Tap "Install"</p>
              </div>
              <p className="text-gray-400 text-sm">The app will be installed!</p>
            </div>
          </div>
        )}

        {!isIOS && !isAndroid && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-white mb-2">Look for the install icon (⊕ or 💻) in your browser's address bar.</p>
            <p className="text-gray-400 text-sm">Click it and select "Install" to add this app to your computer!</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Got It!
        </button>
      </div>
    </div>
  )
}

export default InstallGuide

