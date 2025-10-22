import React, { useState, useEffect } from 'react'
import { MessageSquare, Copy, Check, Archive, Mail, Phone, Clock } from 'lucide-react'
import { supabase, ContactMessage } from '../lib/supabase'

const ContactMessages: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      console.log('🔍 Fetching messages from contact_submissions...')
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('📊 Supabase response:', { data, error })
      
      if (error) {
        console.error('❌ Supabase error:', error)
        throw error
      }
      
      console.log('✅ Messages loaded:', data?.length || 0, 'messages')
      setMessages(data || [])
    } catch (error) {
      console.error('❌ Error fetching messages:', error)
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

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ 
          is_read: true,
          archived_at: new Date().toISOString()
        })
        .eq('id', id)

      if (error) throw error
      
      setMessages(messages.filter(msg => msg.id !== id))
    } catch (error) {
      console.error('Error marking as read:', error)
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Contact Messages</h1>
          <p className="text-gray-400">Manage contact form submissions</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <MessageSquare className="w-4 h-4" />
          <span>{messages.length} unread messages</span>
        </div>
      </div>

      {/* Messages List */}
      {messages.length === 0 ? (
        <div className="text-center py-12">
          <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No unread messages</h3>
          <p className="text-gray-500">All contact messages have been read</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">{message.name}</h3>
                  <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                    {formatDate(message.created_at)}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{message.message}</p>
                <button
                  onClick={() => markAsRead(message.id)}
                  className="w-full sm:w-auto bg-orange-500/20 text-orange-400 border border-orange-500/30 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-500/30 transition-colors"
                >
                  Mark as Read
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
                      onClick={() => copyToClipboard(message.email, 'email', message.id)}
                      className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {copiedItem === `email-${message.id}` ? (
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
                  <p className="text-white font-medium mt-1">{message.email}</p>
                </div>

                {/* Phone */}
                <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">Phone</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(message.phone, 'phone', message.id)}
                      className="flex items-center space-x-1 text-green-400 hover:text-green-300 transition-colors"
                    >
                      {copiedItem === `phone-${message.id}` ? (
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
                  <p className="text-white font-medium mt-1">{message.phone || 'No phone provided'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ContactMessages
