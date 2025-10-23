-- Verify Supabase Security Status
-- Run this to check if RLS is properly enabled and policies are in place

-- ============================================
-- CHECK RLS STATUS
-- ============================================

-- Check if RLS is enabled on tables
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('consultation_bookings', 'contact_submissions', 'analytics_events', 'analytics_sessions', 'analytics_page_views')
ORDER BY tablename;

-- ============================================
-- CHECK EXISTING POLICIES
-- ============================================

-- List all policies on consultation_bookings
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'consultation_bookings' 
AND schemaname = 'public'
ORDER BY policyname;

-- List all policies on contact_submissions
SELECT 
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'contact_submissions' 
AND schemaname = 'public'
ORDER BY policyname;

-- ============================================
-- SECURITY SUMMARY
-- ============================================

-- Count policies per table
SELECT 
    tablename,
    COUNT(*) as policy_count
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename IN ('consultation_bookings', 'contact_submissions', 'analytics_events', 'analytics_sessions', 'analytics_page_views')
GROUP BY tablename
ORDER BY tablename;

-- ============================================
-- EXPECTED RESULTS
-- ============================================

/*
After running the security fix, you should see:

1. RLS STATUS:
   - consultation_bookings: rls_enabled = true
   - contact_submissions: rls_enabled = true
   - analytics_*: rls_enabled = true

2. POLICY COUNT:
   - consultation_bookings: 5 policies
   - contact_submissions: 5 policies
   - analytics_events: 2 policies
   - analytics_sessions: 2 policies
   - analytics_page_views: 2 policies

3. POLICY TYPES:
   - Public insert policies (for forms)
   - Public read policies (for confirmations)
   - Authenticated read/update/delete policies (for admin)
*/
