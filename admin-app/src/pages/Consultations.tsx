import React, { useState, useEffect } from 'react'
import { Calendar, Copy, Check, Archive, Mail, Phone, Clock, Building } from 'lucide-react'
import { supabase, ConsultationBooking } from '../lib/supabase'
import { subscribeToConsultations } from '../utils/realtimeSubscriptions'

const Consultations: React.FC = () => {
  const [consultations, setConsultations] = useState<ConsultationBooking[]>([])
  const [loading, setLoading] = useState(true)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  useEffect(() => {
    fetchConsultations()
    
    // Subscribe to real-time updates
    const subscription = subscribeToConsultations((newConsultation) => {
      // Add new consultation to the list
      setConsultations(prev => [newConsultation, ...prev])
    })
    
    return () => {
      if (subscription) {
        supabase.removeChannel(subscription)
      }
    }
  }, [])

  const fetchConsultations = async () => {
    try {
      console.log('🔍 Fetching unbooked consultations from consultation_bookings...')
      const { data, error } = await supabase
        .from('consultation_bookings')
        .select('*')
        .or('is_booked.is.null,is_booked.eq.false')
        .is('archived_at', null)
        .order('created_at', { ascending: false })

      console.log('📊 Supabase response:', { data, error })
      
      if (error) {
        console.error('❌ Supabase error:', error)
        throw error
      }
      
      console.log('✅ Consultations loaded:', data?.length || 0, 'consultations')
      setConsultations(data || [])
    } catch (error) {
      console.error('❌ Error fetching consultations:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text: string, type: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(`${type}-${id}`)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const markAsBooked = async (id: string) => {
    try {
      const { error } = await supabase
        .from('consultation_bookings')
        .update({ 
          is_booked: true,
          archived_at: new Date().toISOString()
        })
        .eq('id', id)

      if (error) throw error
      
      setConsultations(consultations.filter(consultation => consultation.id !== id))
    } catch (error) {
      console.error('Error marking as booked:', error)
    }
  }

  const markAllAsBooked = async () => {
    if (consultations.length === 0) return
    
    const confirmed = confirm(`Mark all ${consultations.length} consultations as booked?`)
    if (!confirmed) return
    
    try {
      const ids = consultations.map(c => c.id)
      const { error } = await supabase
        .from('consultation_bookings')
        .update({ 
          is_booked: true,
          archived_at: new Date().toISOString()
        })
        .in('id', ids)

      if (error) throw error
      
      setConsultations([])
      alert('All consultations marked as booked!')
    } catch (error) {
      console.error('Error marking all as booked:', error)
      alert('Error marking all as booked')
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Consultation Bookings</h1>
          <p className="text-gray-400">Manage consultation requests and appointments</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{consultations.length} pending</span>
          </div>
          {consultations.length > 0 && (
            <button
              onClick={markAllAsBooked}
              className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-500/30 transition-colors whitespace-nowrap"
            >
              Mark All as Booked
            </button>
          )}
        </div>
      </div>

      {/* Consultations List */}
      {consultations.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No pending consultations</h3>
          <p className="text-gray-500">All consultations have been booked</p>
        </div>
      ) : (
        <div className="space-y-4">
          {consultations.map((consultation, index) => (
            <div
              key={consultation.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">{consultation.full_name}</h3>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                    {formatDate(consultation.created_at)}
                  </span>
                </div>
                {consultation.company_name && <p className="text-gray-400 text-sm mb-2">Company: {consultation.company_name}</p>}
                {consultation.area_of_service && <p className="text-gray-400 text-sm mb-2">Service: {consultation.area_of_service}</p>}
                {consultation.service_interest && (
                  <p className="text-gray-300 mb-2">
                    <span className="text-gray-400">Service Interest:</span> {consultation.service_interest}
                  </p>
                )}
                {consultation.message && (
                  <p className="text-gray-300 mb-4">{consultation.message}</p>
                )}
                {(consultation.preferred_date || consultation.preferred_time) && (
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>
                      {consultation.preferred_date && `Date: ${consultation.preferred_date}`}
                      {consultation.preferred_date && consultation.preferred_time && ' • '}
                      {consultation.preferred_time && `Time: ${consultation.preferred_time}`}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => markAsBooked(consultation.id)}
                  className="w-full sm:w-auto bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-500/30 transition-colors"
                >
                  Mark as Booked
                </button>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-400">Email</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(consultation.email, 'email', consultation.id)}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {copiedItem === `email-${consultation.id}` ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-xs">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-white font-medium mt-1">{consultation.email}</p>
                </div>

                {/* Phone */}
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Phone</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(consultation.phone, 'phone', consultation.id)}
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      {copiedItem === `phone-${consultation.id}` ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-xs">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-xs">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-white font-medium mt-1">{consultation.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Consultations
