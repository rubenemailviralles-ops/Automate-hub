# Admin App Quick Reference

This guide provides ready-to-use queries for your Bolt admin app to manage contact submissions and consultation bookings.

## Setup in Your Admin App

### Install Supabase Client
```bash
npm install @supabase/supabase-js
```

### Initialize Supabase
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## Database Schema Reference

### Contact Submissions
```typescript
interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  business_name: string
  message: string
  status: 'pending' | 'in_progress' | 'completed' | 'canceled'
  email_sent: boolean
  email_sent_at: string | null
  admin_notes: string
  created_at: string
  updated_at: string
}
```

### Consultation Bookings
```typescript
interface ConsultationBooking {
  id: string
  full_name: string
  email: string
  phone: string
  company_name: string
  area_of_service: string
  status: 'pending' | 'confirmed' | 'completed' | 'canceled'
  email_sent: boolean
  email_sent_at: string | null
  admin_notes: string
  created_at: string
  updated_at: string
}
```

---

## Common Queries

### 1. Get All Contact Submissions (Latest First)
```typescript
const { data: submissions, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .order('created_at', { ascending: false })
```

### 2. Get All Consultation Bookings (Latest First)
```typescript
const { data: bookings, error } = await supabase
  .from('consultation_bookings')
  .select('*')
  .order('created_at', { ascending: false })
```

### 3. Filter by Status
```typescript
// Get only pending submissions
const { data: pending, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .eq('status', 'pending')
  .order('created_at', { ascending: false })

// Get confirmed bookings
const { data: confirmed, error } = await supabase
  .from('consultation_bookings')
  .select('*')
  .eq('status', 'confirmed')
  .order('created_at', { ascending: false })
```

### 4. Get Count by Status
```typescript
// Count pending contact submissions
const { count, error } = await supabase
  .from('contact_submissions')
  .select('*', { count: 'exact', head: true })
  .eq('status', 'pending')

// Count all bookings by status
const statuses = ['pending', 'confirmed', 'completed', 'canceled']
const counts = {}

for (const status of statuses) {
  const { count } = await supabase
    .from('consultation_bookings')
    .select('*', { count: 'exact', head: true })
    .eq('status', status)
  counts[status] = count
}
```

### 5. Update Status
```typescript
// Mark contact submission as completed
const { data, error } = await supabase
  .from('contact_submissions')
  .update({ status: 'completed' })
  .eq('id', submissionId)
  .select()

// Mark booking as confirmed
const { data, error } = await supabase
  .from('consultation_bookings')
  .update({ status: 'confirmed' })
  .eq('id', bookingId)
  .select()
```

### 6. Update with Admin Notes
```typescript
const { data, error } = await supabase
  .from('consultation_bookings')
  .update({ 
    status: 'completed',
    admin_notes: 'Had a great call. Client wants CRM + Website package.'
  })
  .eq('id', bookingId)
  .select()
```

### 7. Search by Name or Email
```typescript
// Search contact submissions
const { data, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .or(`name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`)
  .order('created_at', { ascending: false })

// Search consultation bookings
const { data, error } = await supabase
  .from('consultation_bookings')
  .select('*')
  .or(`full_name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%,company_name.ilike.%${searchTerm}%`)
  .order('created_at', { ascending: false })
```

### 8. Get Recent Items (Last 7 Days)
```typescript
const sevenDaysAgo = new Date()
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

const { data, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .gte('created_at', sevenDaysAgo.toISOString())
  .order('created_at', { ascending: false })
```

### 9. Mark Email as Sent (Manual)
```typescript
const { data, error } = await supabase
  .from('contact_submissions')
  .update({ 
    email_sent: true,
    email_sent_at: new Date().toISOString()
  })
  .eq('id', submissionId)
  .select()
```

### 10. Resend Email (Reset Email Status)
```typescript
const { data, error } = await supabase
  .from('consultation_bookings')
  .update({ 
    email_sent: false,
    email_sent_at: null
  })
  .eq('id', bookingId)
  .select()
```

---

## Real-time Subscriptions (Optional)

Listen for new submissions/bookings in real-time:

### Listen for New Contact Submissions
```typescript
const subscription = supabase
  .channel('contact_submissions')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'contact_submissions' },
    (payload) => {
      console.log('New contact submission!', payload.new)
      // Update your UI, show notification, etc.
    }
  )
  .subscribe()

// Don't forget to unsubscribe when component unmounts
// subscription.unsubscribe()
```

### Listen for New Consultation Bookings
```typescript
const subscription = supabase
  .channel('consultation_bookings')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'consultation_bookings' },
    (payload) => {
      console.log('New booking!', payload.new)
      // Update your UI, show notification, etc.
    }
  )
  .subscribe()
```

### Listen for Status Changes
```typescript
const subscription = supabase
  .channel('booking_updates')
  .on('postgres_changes', 
    { event: 'UPDATE', schema: 'public', table: 'consultation_bookings' },
    (payload) => {
      console.log('Booking updated!', payload.new)
    }
  )
  .subscribe()
```

---

## Sample Dashboard Stats Component

```typescript
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function DashboardStats() {
  const [stats, setStats] = useState({
    pendingContacts: 0,
    pendingBookings: 0,
    totalContacts: 0,
    totalBookings: 0,
  })

  useEffect(() => {
    async function fetchStats() {
      // Pending contacts
      const { count: pendingContacts } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending')

      // Pending bookings
      const { count: pendingBookings } = await supabase
        .from('consultation_bookings')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending')

      // Total contacts
      const { count: totalContacts } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true })

      // Total bookings
      const { count: totalBookings } = await supabase
        .from('consultation_bookings')
        .select('*', { count: 'exact', head: true })

      setStats({
        pendingContacts: pendingContacts || 0,
        pendingBookings: pendingBookings || 0,
        totalContacts: totalContacts || 0,
        totalBookings: totalBookings || 0,
      })
    }

    fetchStats()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Pending Contacts</h3>
        <p className="text-3xl font-bold text-red-600">{stats.pendingContacts}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Pending Bookings</h3>
        <p className="text-3xl font-bold text-orange-600">{stats.pendingBookings}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Contacts</h3>
        <p className="text-3xl font-bold text-blue-600">{stats.totalContacts}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Bookings</h3>
        <p className="text-3xl font-bold text-green-600">{stats.totalBookings}</p>
      </div>
    </div>
  )
}
```

---

## Sample Bookings List Component

```typescript
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function BookingsList() {
  const [bookings, setBookings] = useState<any[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchBookings() {
      let query = supabase
        .from('consultation_bookings')
        .select('*')
        .order('created_at', { ascending: false })

      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error } = await query

      if (data) {
        setBookings(data)
      }
    }

    fetchBookings()
  }, [filter])

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('consultation_bookings')
      .update({ status })
      .eq('id', id)

    if (!error) {
      // Refresh list
      setBookings(bookings.map(b => 
        b.id === id ? { ...b, status } : b
      ))
    }
  }

  return (
    <div>
      <div className="mb-4">
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="all">All Bookings</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{booking.full_name}</h3>
                <p className="text-gray-600">{booking.company_name}</p>
                <p className="text-sm text-gray-500">{booking.email} • {booking.phone}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Service: <span className="font-semibold">{booking.area_of_service}</span>
                </p>
                {booking.admin_notes && (
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Notes: {booking.admin_notes}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                  booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {booking.status}
                </span>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(booking.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="mt-4 flex gap-2">
              {booking.status === 'pending' && (
                <button 
                  onClick={() => updateStatus(booking.id, 'confirmed')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Confirm
                </button>
              )}
              {(booking.status === 'pending' || booking.status === 'confirmed') && (
                <button 
                  onClick={() => updateStatus(booking.id, 'completed')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Mark Complete
                </button>
              )}
              {booking.status !== 'canceled' && (
                <button 
                  onClick={() => updateStatus(booking.id, 'canceled')}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## Authentication Setup

For your admin app, you'll want to secure it with authentication:

### Set Up Auth in Supabase
1. Go to Authentication → Providers in Supabase Dashboard
2. Enable Email provider
3. Create an admin user in Authentication → Users

### Sign In Function
```typescript
async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  
  if (error) throw error
  return data
}
```

### Check Auth Status
```typescript
const { data: { session } } = await supabase.auth.getSession()
if (!session) {
  // Redirect to login
}
```

### Sign Out
```typescript
await supabase.auth.signOut()
```

---

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Supabase JS Client: https://supabase.com/docs/reference/javascript
- Real-time: https://supabase.com/docs/guides/realtime

Happy building! 🚀

