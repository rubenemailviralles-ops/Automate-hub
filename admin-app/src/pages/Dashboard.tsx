import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Calendar, Archive, TrendingUp, Users, Clock } from 'lucide-react'
import { supabase, ContactMessage, ConsultationBooking } from '../lib/supabase'

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalMessages: 0,
    unreadMessages: 0,
    totalConsultations: 0,
    pendingConsultations: 0,
    recentMessages: [] as ContactMessage[],
    recentConsultations: [] as ConsultationBooking[]
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      // Fetch contact messages
      const { data: messages } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      // Fetch consultations
      const { data: consultations } = await supabase
        .from('consultation_bookings')
        .select('*')
        .order('created_at', { ascending: false })

      setStats({
        totalMessages: messages?.length || 0,
        unreadMessages: messages?.filter(m => !m.is_read).length || 0,
        totalConsultations: consultations?.length || 0,
        pendingConsultations: consultations?.filter(c => !c.is_booked).length || 0,
        recentMessages: messages?.slice(0, 3) || [],
        recentConsultations: consultations?.slice(0, 3) || []
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const statCards = [
    {
      title: 'Pending Consultations',
      value: stats.pendingConsultations,
      icon: Clock,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      link: '/consultations'
    },
    {
      title: 'Unread Messages',
      value: stats.unreadMessages,
      icon: MessageSquare,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      link: '/contact'
    },
    {
      title: 'Total Consultations',
      value: stats.totalConsultations,
      icon: Calendar,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      link: '/consultations'
    },
    {
      title: 'Total Messages',
      value: stats.totalMessages,
      icon: MessageSquare,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      link: '/contact'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage your leads and consultation bookings</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Link
              key={index}
              to={stat.link}
              className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-6 backdrop-blur-sm animate-fade-in hover:scale-105 transition-all cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Messages */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Messages</h2>
            <Link
              to="/contact"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {stats.recentMessages.length > 0 ? (
              stats.recentMessages.map((message) => (
                <div
                  key={message.id}
                  className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">{message.name}</h3>
                    <span className="text-xs text-gray-400">
                      {new Date(message.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{message.message}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs text-gray-400">{message.email}</span>
                    {!message.is_read && (
                      <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-4">No recent messages</p>
            )}
          </div>
        </div>

        {/* Recent Consultations */}
        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Consultations</h2>
            <Link
              to="/consultations"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {stats.recentConsultations.length > 0 ? (
              stats.recentConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">{consultation.name}</h3>
                    <span className="text-xs text-gray-400">
                      {new Date(consultation.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{consultation.company || 'No company'}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs text-gray-400">{consultation.email}</span>
                    {!consultation.is_booked && (
                      <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-4">No recent consultations</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-200 group"
        >
          <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Contact Messages</h3>
          <p className="text-sm text-gray-400">View and manage contact form submissions</p>
        </Link>

        <Link
          to="/consultations"
          className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center hover:from-green-500/30 hover:to-green-600/30 transition-all duration-200 group"
        >
          <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Consultations</h3>
          <p className="text-sm text-gray-400">Manage consultation bookings and appointments</p>
        </Link>

        <Link
          to="/archives"
          className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6 text-center hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-200 group"
        >
          <Archive className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold text-white mb-2">Archives</h3>
          <p className="text-sm text-gray-400">View archived messages and consultations</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
