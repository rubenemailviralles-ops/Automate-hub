import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  MessageSquare, 
  Calendar, 
  Archive, 
  Menu, 
  X,
  Bot,
  Download
} from 'lucide-react'
import InstallGuide from './InstallGuide'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showInstallGuide, setShowInstallGuide] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Listen for the install prompt
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }
    
    window.addEventListener('beforeinstallprompt', handler)
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Show visual install guide
      setShowInstallGuide(true)
      return
    }

    // Browser supports auto-install prompt
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('App installed!')
    }
    
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Contact Messages', href: '/contact', icon: MessageSquare },
    { name: 'Consultations', href: '/consultations', icon: Calendar },
    { name: 'Archives', href: '/archives', icon: Archive },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-900/40 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Automate Hub Admin</h1>
                <p className="text-sm text-gray-400">Manage your leads and bookings</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Install Button - Always Visible */}
              <button
                onClick={handleInstallClick}
                className="hidden sm:flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30"
              >
                <Download className="w-4 h-4 mr-1" />
                Install
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 pb-4 items-center">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              )
            })}
            
            {/* Install App Button */}
            <button
              onClick={handleInstallClick}
              className="ml-auto flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30"
            >
              <Download className="w-4 h-4 mr-2" />
              Install App
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                )
              })}
              
              {/* Install App Button - Mobile */}
              <button
                onClick={() => {
                  handleInstallClick()
                  setIsMenuOpen(false)
                }}
                className="w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/30"
              >
                <Download className="w-4 h-4 mr-3" />
                Install App on Phone
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      {/* Install Guide Popup */}
      {showInstallGuide && <InstallGuide onClose={() => setShowInstallGuide(false)} />}
    </div>
  )
}

export default Layout
