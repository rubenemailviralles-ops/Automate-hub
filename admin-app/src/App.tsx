import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ContactMessages from './pages/ContactMessages'
import Consultations from './pages/Consultations'
import Archives from './pages/Archives'
import Install from './pages/Install'
import { initNotifications, getNotificationPermission } from './utils/notifications'
import { initRealtimeSubscriptions, unsubscribeAll } from './utils/realtimeSubscriptions'
import { Bell, BellOff } from 'lucide-react'

function App() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [showNotificationBanner, setShowNotificationBanner] = useState(true)

  useEffect(() => {
    // Check if notifications are already enabled
    const permission = getNotificationPermission()
    setNotificationsEnabled(permission === 'granted')
    
    // Hide banner if already granted
    if (permission === 'granted') {
      setShowNotificationBanner(false)
      initRealtimeSubscriptions()
    }

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribeAll()
    }
  }, [])

  const handleEnableNotifications = async () => {
    const granted = await initNotifications()
    setNotificationsEnabled(granted)
    
    if (granted) {
      setShowNotificationBanner(false)
      initRealtimeSubscriptions()
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-black">
        {/* Background orbs */}
        <div className="floating-orb-1"></div>
        <div className="floating-orb-2"></div>
        <div className="floating-orb-3"></div>
        
        {/* Notification Permission Banner */}
        {showNotificationBanner && !notificationsEnabled && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Enable Instant Lead Notifications</p>
                  <p className="text-sm text-blue-100">Get notified immediately when new contacts or bookings come in!</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleEnableNotifications}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Enable Notifications
                </button>
                <button
                  onClick={() => setShowNotificationBanner(false)}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Notification Status Indicator */}
        <div className="fixed bottom-4 right-4 z-40">
          {notificationsEnabled ? (
            <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Notifications ON</span>
            </div>
          ) : (
            <button
              onClick={handleEnableNotifications}
              className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-600 transition-colors"
            >
              <BellOff className="w-4 h-4" />
              <span className="text-sm font-medium">Enable Alerts</span>
            </button>
          )}
        </div>
        
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<ContactMessages />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/install" element={<Install />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  )
}

export default App
