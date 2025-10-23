import React, { useState, useEffect } from 'react'
import { BarChart3, Users, MousePointer, Eye, TrendingUp, Clock, Globe, Smartphone, Monitor } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface AnalyticsData {
  totalEvents: number
  uniqueSessions: number
  pageViews: number
  buttonClicks: number
  formSubmissions: number
  ctaClicks: number
  popularPages: Array<{
    page_path: string
    views: number
    unique_visitors: number
  }>
  topEvents: Array<{
    event_name: string
    event_type: string
    count: number
    unique_users: number
  }>
  deviceBreakdown: Array<{
    device_type: string
    count: number
  }>
  recentEvents: Array<{
    id: string
    event_type: string
    event_name: string
    page_path: string
    created_at: string
  }>
}

const Analytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalEvents: 0,
    uniqueSessions: 0,
    pageViews: 0,
    buttonClicks: 0,
    formSubmissions: 0,
    ctaClicks: 0,
    popularPages: [],
    topEvents: [],
    deviceBreakdown: [],
    recentEvents: []
  })
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('7d') // 1d, 7d, 30d, 90d

  useEffect(() => {
    fetchAnalyticsData()
  }, [timeRange])

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true)
      
      // Calculate date range
      const now = new Date()
      const days = timeRange === '1d' ? 1 : timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90
      const startDate = new Date(now.getTime() - (days * 24 * 60 * 60 * 1000))

      // Fetch summary data
      const { data: summaryData } = await supabase
        .from('analytics_summary')
        .select('*')
        .gte('date', startDate.toISOString().split('T')[0])
        .order('date', { ascending: false })

      // Fetch popular pages
      const { data: popularPages } = await supabase
        .from('popular_pages')
        .select('*')
        .limit(10)

      // Fetch top events
      const { data: topEvents } = await supabase
        .from('top_events')
        .select('*')
        .limit(10)

      // Fetch device breakdown
      const { data: deviceData } = await supabase
        .from('analytics_events')
        .select('metadata->device_type')
        .gte('created_at', startDate.toISOString())

      // Fetch recent events
      const { data: recentEvents } = await supabase
        .from('analytics_events')
        .select('id, event_type, event_name, page_path, created_at')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: false })
        .limit(20)

      // Calculate totals
      const totals = summaryData?.reduce((acc, day) => ({
        totalEvents: acc.totalEvents + (day.total_events || 0),
        uniqueSessions: acc.uniqueSessions + (day.unique_sessions || 0),
        pageViews: acc.pageViews + (day.page_views || 0),
        buttonClicks: acc.buttonClicks + (day.button_clicks || 0),
        formSubmissions: acc.formSubmissions + (day.form_submissions || 0),
        ctaClicks: acc.ctaClicks + (day.cta_clicks || 0)
      }), {
        totalEvents: 0,
        uniqueSessions: 0,
        pageViews: 0,
        buttonClicks: 0,
        formSubmissions: 0,
        ctaClicks: 0
      })

      // Process device breakdown
      const deviceCounts: Record<string, number> = {}
      deviceData?.forEach(item => {
        const deviceType = item.device_type || 'unknown'
        deviceCounts[deviceType] = (deviceCounts[deviceType] || 0) + 1
      })

      const deviceBreakdown = Object.entries(deviceCounts).map(([device_type, count]) => ({
        device_type,
        count
      }))

      setAnalyticsData({
        ...totals,
        popularPages: popularPages || [],
        topEvents: topEvents || [],
        deviceBreakdown,
        recentEvents: recentEvents || []
      })
    } catch (error) {
      console.error('Error fetching analytics data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType.toLowerCase()) {
      case 'mobile': return <Smartphone className="w-5 h-5" />
      case 'tablet': return <Monitor className="w-5 h-5" />
      case 'desktop': return <Monitor className="w-5 h-5" />
      default: return <Globe className="w-5 h-5" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Website Analytics</h1>
            <p className="text-gray-600 mt-2">Track your website performance and user behavior</p>
          </div>
          
          {/* Time Range Selector */}
          <div className="flex space-x-2">
            {['1d', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {range === '1d' ? 'Today' : range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.totalEvents)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Unique Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.uniqueSessions)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.pageViews)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MousePointer className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Button Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.buttonClicks)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Form Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.formSubmissions)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-pink-100 rounded-lg">
                <MousePointer className="w-6 h-6 text-pink-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">CTA Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(analyticsData.ctaClicks)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Session Duration</p>
                <p className="text-2xl font-bold text-gray-900">2:34</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Popular Pages */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Popular Pages</h3>
            </div>
            <div className="p-6">
              {analyticsData.popularPages.length > 0 ? (
                <div className="space-y-4">
                  {analyticsData.popularPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{page.page_path}</p>
                        <p className="text-sm text-gray-500">{page.unique_visitors} unique visitors</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{formatNumber(page.views)}</p>
                        <p className="text-sm text-gray-500">views</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No page data available</p>
              )}
            </div>
          </div>

          {/* Top Events */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Top Events</h3>
            </div>
            <div className="p-6">
              {analyticsData.topEvents.length > 0 ? (
                <div className="space-y-4">
                  {analyticsData.topEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{event.event_name}</p>
                        <p className="text-sm text-gray-500">{event.event_type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{formatNumber(event.count)}</p>
                        <p className="text-sm text-gray-500">{event.unique_users} users</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No event data available</p>
              )}
            </div>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Device Breakdown</h3>
            </div>
            <div className="p-6">
              {analyticsData.deviceBreakdown.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {analyticsData.deviceBreakdown.map((device, index) => (
                    <div key={index} className="flex items-center">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {getDeviceIcon(device.device_type)}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900 capitalize">{device.device_type}</p>
                        <p className="text-2xl font-bold text-gray-900">{formatNumber(device.count)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No device data available</p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Events */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Events</h3>
            </div>
            <div className="p-6">
              {analyticsData.recentEvents.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Event</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Page</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData.recentEvents.map((event) => (
                        <tr key={event.id} className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium text-gray-900">{event.event_name}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {event.event_type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{event.page_path}</td>
                          <td className="py-3 px-4 text-gray-600">{formatDate(event.created_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No recent events</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
