import React, { useState, useEffect } from 'react'
import { Archive, MessageSquare, Calendar, Clock, Mail, Phone } from 'lucide-react'
import { supabase, ContactMessage, ConsultationBooking } from '../lib/supabase'

const Archives: React.FC = () => {
  const [archivedMessages, setArchivedMessages] = useState<ContactMessage[]>([])
  const [archivedConsultations, setArchivedConsultations] = useState<ConsultationBooking[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'messages' | 'consultations'>('messages')

  useEffect(() => {
    fetchArchives()
  }, [])

  const fetchArchives = async () => {
    try {
      // Fetch archived messages
      const { data: messages } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('is_read', true)
        .not('archived_at', 'is', null)
        .order('archived_at', { ascending: false })

      // Fetch archived consultations
      const { data: consultations } = await supabase
        .from('consultation_bookings')
        .select('*')
        .eq('is_booked', true)
        .not('archived_at', 'is', null)
        .order('archived_at', { ascending: false })

      setArchivedMessages(messages || [])
      setArchivedConsultations(consultations || [])
    } catch (error) {
      console.error('Error fetching archives:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Archives</h1>
        <p className="text-gray-400">View archived messages and consultations</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-800/50 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'messages'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Messages ({archivedMessages.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('consultations')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'consultations'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Consultations ({archivedConsultations.length})</span>
        </button>
      </div>

      {/* Messages Archive */}
      {activeTab === 'messages' && (
        <div className="space-y-4">
          {archivedMessages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No archived messages</h3>
              <p className="text-gray-500">Messages will appear here after being marked as read</p>
            </div>
          ) : (
            archivedMessages.map((message, index) => (
              <div
                key={message.id}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{message.full_name}</h3>
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                        {formatDate(message.created_at)}
                      </span>
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded">
                        Read
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{message.message}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>{message.email}</span>
                      <Phone className="w-4 h-4 ml-4" />
                      <span>{message.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Consultations Archive */}
      {activeTab === 'consultations' && (
        <div className="space-y-4">
          {archivedConsultations.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No archived consultations</h3>
              <p className="text-gray-500">Consultations will appear here after being marked as booked</p>
            </div>
          ) : (
            archivedConsultations.map((consultation, index) => (
              <div
                key={consultation.id}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{consultation.full_name}</h3>
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                        {formatDate(consultation.created_at)}
                      </span>
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded">
                        Booked
                      </span>
                    </div>
                    {consultation.company && (
                      <p className="text-gray-300 mb-2">{consultation.company}</p>
                    )}
                    {consultation.service_interest && (
                      <p className="text-gray-300 mb-2">
                        <span className="text-gray-400">Service:</span> {consultation.service_interest}
                      </p>
                    )}
                    {consultation.message && (
                      <p className="text-gray-300 mb-4">{consultation.message}</p>
                    )}
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Mail className="w-4 h-4" />
                      <span>{consultation.email}</span>
                      <Phone className="w-4 h-4 ml-4" />
                      <span>{consultation.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Archives
