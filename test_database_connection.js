// Test Database Connection and Table Structure
// Run this to verify your Supabase connection and table structure

import { createClient } from '@supabase/supabase-js'

// Replace with your actual Supabase URL and anon key
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testDatabaseConnection() {
  console.log('🔍 Testing Supabase Database Connection...\n')
  
  try {
    // Test 1: Check if tables exist
    console.log('1. Checking if tables exist...')
    
    const { data: contactTable, error: contactError } = await supabase
      .from('contact_submissions')
      .select('*')
      .limit(1)
    
    if (contactError) {
      console.log('❌ contact_submissions table error:', contactError.message)
    } else {
      console.log('✅ contact_submissions table exists')
    }
    
    const { data: bookingTable, error: bookingError } = await supabase
      .from('consultation_bookings')
      .select('*')
      .limit(1)
    
    if (bookingError) {
      console.log('❌ consultation_bookings table error:', bookingError.message)
    } else {
      console.log('✅ consultation_bookings table exists')
    }
    
    // Test 2: Check table structure
    console.log('\n2. Checking table structure...')
    
    // Test contact_submissions columns
    console.log('\n📋 contact_submissions columns:')
    const { data: contactColumns } = await supabase
      .rpc('get_table_columns', { table_name: 'contact_submissions' })
    
    if (contactColumns) {
      contactColumns.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`)
      })
    }
    
    // Test consultation_bookings columns  
    console.log('\n📋 consultation_bookings columns:')
    const { data: bookingColumns } = await supabase
      .rpc('get_table_columns', { table_name: 'consultation_bookings' })
    
    if (bookingColumns) {
      bookingColumns.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`)
      })
    }
    
    // Test 3: Try inserting test data
    console.log('\n3. Testing data insertion...')
    
    // Test contact form submission
    const testContactData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      business_name: 'Test Company',
      message: 'This is a test message'
    }
    
    const { data: contactInsert, error: contactInsertError } = await supabase
      .from('contact_submissions')
      .insert([testContactData])
      .select()
    
    if (contactInsertError) {
      console.log('❌ Contact insertion error:', contactInsertError.message)
    } else {
      console.log('✅ Contact form insertion successful')
      console.log('   Inserted ID:', contactInsert[0].id)
      
      // Clean up test data
      await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', contactInsert[0].id)
      console.log('   Test data cleaned up')
    }
    
    // Test consultation booking submission
    const testBookingData = {
      full_name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      company_name: 'Test Company',
      area_of_service: 'website-creation'
    }
    
    const { data: bookingInsert, error: bookingInsertError } = await supabase
      .from('consultation_bookings')
      .insert([testBookingData])
      .select()
    
    if (bookingInsertError) {
      console.log('❌ Booking insertion error:', bookingInsertError.message)
    } else {
      console.log('✅ Consultation booking insertion successful')
      console.log('   Inserted ID:', bookingInsert[0].id)
      
      // Clean up test data
      await supabase
        .from('consultation_bookings')
        .delete()
        .eq('id', bookingInsert[0].id)
      console.log('   Test data cleaned up')
    }
    
    console.log('\n🎉 Database connection test completed!')
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message)
  }
}

// Run the test
testDatabaseConnection()
