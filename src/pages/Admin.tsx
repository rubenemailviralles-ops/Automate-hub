import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Lock, Mail, LogOut, MessageSquare, Calendar, Trash2, Eye, ChevronDown, ChevronUp } from 'lucide-react';

type Tab = 'messages' | 'consultations';

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('messages');
  const [messages, setMessages] = useState<any[]>([]);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (loggedIn) fetchData();
  }, [loggedIn]);

  const fetchData = async () => {
    setLoading(true);
    const [msgRes, conRes] = await Promise.all([
      supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
      supabase.from('consultations').select('*').order('created_at', { ascending: false })
    ]);
    if (msgRes.data) setMessages(msgRes.data);
    if (conRes.data) setConsultations(conRes.data);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
    setIsLoggingIn(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLoggedIn(false);
  };

  const deleteMessage = async (id: string) => {
    await supabase.from('contact_messages').delete().eq('id', id);
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const deleteConsultation = async (id: string) => {
    await supabase.from('consultations').delete().eq('id', id);
    setConsultations(prev => prev.filter(c => c.id !== id));
  };

  const updateConsultationStatus = async (id: string, status: string) => {
    await supabase.from('consultations').update({ status }).eq('id', id);
    setConsultations(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    contacted: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    confirmed: 'bg-green-500/20 text-green-400 border-green-500/30',
    completed: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  };

  if (!loggedIn) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Automate Hub Admin</h1>
              <p className="text-gray-400 mt-2">Sign in to view messages and bookings</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none"
                    placeholder="admin@automatehub.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              {loginError && <p className="text-red-400 text-sm text-center">{loginError}</p>}
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-xl font-semibold transition-all disabled:bg-gray-600 disabled:text-gray-300"
              >
                {isLoggingIn ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">View and manage inquiries and bookings</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-white/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{messages.length}</p>
                <p className="text-gray-400 text-sm">Messages</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{consultations.length}</p>
                <p className="text-gray-400 text-sm">Consultations</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{consultations.filter(c => c.status === 'pending').length}</p>
                <p className="text-gray-400 text-sm">Pending Consultations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'messages' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'consultations' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            Consultations ({consultations.length})
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading...</div>
        ) : activeTab === 'messages' ? (
          messages.length === 0 ? (
            <div className="text-center py-12 text-gray-400">No messages yet.</div>
          ) : (
            <div className="space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{msg.name}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">{msg.source}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{msg.email}</p>
                      {msg.phone && <p className="text-gray-500 text-sm">{msg.phone}</p>}
                      {msg.business_name && <p className="text-gray-500 text-sm">{msg.business_name}</p>}
                      <p className="text-gray-500 text-xs mt-2">{formatDate(msg.created_at)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setExpandedId(expandedId === msg.id ? null : msg.id)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {expandedId === msg.id ? <ChevronUp className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {expandedId === msg.id && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-gray-300 whitespace-pre-wrap">{msg.message}</p>
                      {msg.budget && <p className="text-gray-400 text-sm mt-2">Budget: {msg.budget}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        ) : consultations.length === 0 ? (
          <div className="text-center py-12 text-gray-400">No consultations yet.</div>
        ) : (
          <div className="space-y-4">
            {consultations.map(con => (
              <div key={con.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{con.full_name}</h3>
                      <span className={`text-xs px-2 py-1 border rounded-full ${statusColors[con.status] || statusColors.pending}`}>
                        {con.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{con.email}</p>
                    <p className="text-gray-500 text-sm">{con.phone}</p>
                    <p className="text-gray-500 text-sm">{con.company_name}</p>
                    <p className="text-gray-500 text-sm mt-1">Service: {con.area_of_service}</p>
                    <p className="text-gray-500 text-xs mt-2">{formatDate(con.created_at)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select
                      value={con.status}
                      onChange={e => updateConsultationStatus(con.id, e.target.value)}
                      className="bg-black border border-white/20 rounded-lg text-white text-sm px-2 py-1 focus:outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button
                      onClick={() => deleteConsultation(con.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
