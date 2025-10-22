import React, { useState, useEffect } from 'react'
import { Bug, Database, AlertCircle, CheckCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Debug: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    runDebugTests()
  }, [])

  const runDebugTests = async () => {
    const results: any = {
      supabaseConnection: null,
      contactSubmissions: null,
      consultationBookings: null,
      errors: []
    }

    try {
      // Test 1: Supabase Connection
      console.log('🔍 Testing Supabase connection...')
      console.log('🔍 Supabase URL:', supabase.supabaseUrl)
      console.log('🔍 Supabase Key:', supabase.supabaseKey ? 'Present' : 'Missing')
      
      const { data: connectionTest, error: connectionError } = await supabase
        .from('contact_submissions')
        .select('count')
        .limit(1)

      results.supabaseConnection = {
        success: !connectionError,
        error: connectionError?.message || null,
        data: connectionTest,
        url: supabase.supabaseUrl,
        hasKey: !!supabase.supabaseKey
      }

      // Test 2: Contact Submissions
      console.log('🔍 Testing contact_submissions table...')
      const { data: contacts, error: contactsError } = await supabase
        .from('contact_submissions')
        .select('*')
        .limit(5)

      results.contactSubmissions = {
        success: !contactsError,
        error: contactsError?.message || null,
        count: contacts?.length || 0,
        data: contacts
      }

      // Test 3: Consultation Bookings
      console.log('🔍 Testing consultation_bookings table...')
      const { data: consultations, error: consultationsError } = await supabase
        .from('consultation_bookings')
        .select('*')
        .limit(5)

      results.consultationBookings = {
        success: !consultationsError,
        error: consultationsError?.message || null,
        count: consultations?.length || 0,
        data: consultations
      }

      // Test 4: Try to insert a test record
      console.log('🔍 Testing insert capability...')
      const { data: insertTest, error: insertError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message from debug'
        }])
        .select()

      results.insertTest = {
        success: !insertError,
        error: insertError?.message || null,
        data: insertTest
      }

    } catch (error) {
      results.errors.push(`General error: ${error}`)
    }

    setDebugInfo(results)
    setLoading(false)
  }

  const TestResult = ({ title, result, icon: Icon }: { title: string, result: any, icon: any }) => (
    <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className={`w-6 h-6 ${result.success ? 'text-green-400' : 'text-red-400'}`} />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {result.success ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-400" />
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-300">
          <span className="font-medium">Status:</span> {result.success ? '✅ Success' : '❌ Failed'}
        </p>
        
        {result.error && (
          <p className="text-sm text-red-400">
            <span className="font-medium">Error:</span> {result.error}
          </p>
        )}
        
        {result.count !== undefined && (
          <p className="text-sm text-gray-300">
            <span className="font-medium">Records found:</span> {result.count}
          </p>
        )}
        
        {result.data && result.data.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-300 font-medium mb-2">Sample data:</p>
            <pre className="text-xs text-gray-400 bg-gray-900/50 p-3 rounded overflow-auto max-h-32">
              {JSON.stringify(result.data[0], null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
        <span className="ml-3 text-gray-400">Running debug tests...</span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Debug Information</h1>
        <p className="text-gray-400">Check what's happening with your Supabase connection</p>
      </div>

      {/* Debug Results */}
      <div className="space-y-6">
        <TestResult
          title="Supabase Connection"
          result={debugInfo.supabaseConnection}
          icon={Database}
        />
        
        <TestResult
          title="Contact Submissions Table"
          result={debugInfo.contactSubmissions}
          icon={Bug}
        />
        
        <TestResult
          title="Consultation Bookings Table"
          result={debugInfo.consultationBookings}
          icon={Bug}
        />
        
        <TestResult
          title="Insert Test"
          result={debugInfo.insertTest}
          icon={Bug}
        />
      </div>

      {/* Summary */}
      <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Summary</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-300">
            <span className="font-medium">Total contact submissions:</span> {debugInfo.contactSubmissions?.count || 0}
          </p>
          <p className="text-sm text-gray-300">
            <span className="font-medium">Total consultation bookings:</span> {debugInfo.consultationBookings?.count || 0}
          </p>
          {debugInfo.errors.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-red-400 font-medium">Errors:</p>
              {debugInfo.errors.map((error: string, index: number) => (
                <p key={index} className="text-xs text-red-400">{error}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">What This Means:</h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>• <span className="font-medium">Green checkmarks:</span> Everything is working correctly</p>
          <p>• <span className="font-medium">Red X marks:</span> There's an issue that needs fixing</p>
          <p>• <span className="font-medium">0 records found:</span> Your tables are empty (add some test data)</p>
          <p>• <span className="font-medium">Connection errors:</span> Check your Supabase credentials</p>
        </div>
      </div>
    </div>
  )
}

export default Debug
