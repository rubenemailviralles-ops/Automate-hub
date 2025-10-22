import React, { useEffect, useState } from 'react'
import { Bell, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { getNotificationPermission, initNotifications } from '../utils/notifications'
import { checkRealtimeStatus } from '../utils/realtimeSubscriptions'

const NotificationStatus: React.FC = () => {
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default')
  const [realtimeStatus, setRealtimeStatus] = useState({ contacts: false, consultations: false })

  useEffect(() => {
    checkStatus()
    const interval = setInterval(checkStatus, 2000)
    return () => clearInterval(interval)
  }, [])

  const checkStatus = () => {
    setNotificationPermission(getNotificationPermission())
    setRealtimeStatus(checkRealtimeStatus())
  }

  const handleEnableNotifications = async () => {
    await initNotifications()
    checkStatus()
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Notification Status</h1>
        <p className="text-gray-400">Check if notifications are working properly</p>
      </div>

      {/* Notification Permission */}
      <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Browser Notifications</h2>
          </div>
          {notificationPermission === 'granted' ? (
            <CheckCircle className="w-6 h-6 text-green-400" />
          ) : notificationPermission === 'denied' ? (
            <XCircle className="w-6 h-6 text-red-400" />
          ) : (
            <AlertCircle className="w-6 h-6 text-yellow-400" />
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Status:</span>
            <span className={`font-semibold ${
              notificationPermission === 'granted' ? 'text-green-400' :
              notificationPermission === 'denied' ? 'text-red-400' :
              'text-yellow-400'
            }`}>
              {notificationPermission === 'granted' ? 'Enabled ✅' :
               notificationPermission === 'denied' ? 'Blocked ❌' :
               'Not Enabled ⚠️'}
            </span>
          </div>

          {notificationPermission !== 'granted' && (
            <button
              onClick={handleEnableNotifications}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Enable Notifications
            </button>
          )}
        </div>
      </div>

      {/* Real-time Subscriptions */}
      <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">Real-time Subscriptions</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Contact Messages:</span>
            <span className={`font-semibold ${realtimeStatus.contacts ? 'text-green-400' : 'text-red-400'}`}>
              {realtimeStatus.contacts ? 'Active ✅' : 'Inactive ❌'}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400">Consultation Bookings:</span>
            <span className={`font-semibold ${realtimeStatus.consultations ? 'text-green-400' : 'text-red-400'}`}>
              {realtimeStatus.consultations ? 'Active ✅' : 'Inactive ❌'}
            </span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-3">To Get Notifications:</h3>
        <ol className="space-y-2 text-gray-400 text-sm">
          <li>1. Click "Enable Notifications" button above</li>
          <li>2. Click "Allow" when your browser asks for permission</li>
          <li>3. Make sure Real-time subscriptions show "Active ✅"</li>
          <li>4. Submit a test form on your main website</li>
          <li>5. You should get a notification instantly!</li>
        </ol>
      </div>

      {/* Test Notification */}
      {notificationPermission === 'granted' && (
        <button
          onClick={() => {
            new Notification('🧪 Test Notification', {
              body: 'If you see this, notifications are working!',
              icon: '/icon-192x192.png',
            })
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Send Test Notification
        </button>
      )}
    </div>
  )
}

export default NotificationStatus

