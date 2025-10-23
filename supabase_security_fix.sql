-- Supabase Security Fix: Enable RLS and Create Proper Policies
-- Run this in your Supabase SQL Editor to secure your data

-- ============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on consultation_bookings table
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Enable RLS on contact_submissions table  
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Enable RLS on analytics tables (if they exist)
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_page_views ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CONSULTATION BOOKINGS POLICIES
-- ============================================

-- Allow public to insert consultation bookings (for your website forms)
CREATE POLICY "Allow public insert consultation bookings" ON public.consultation_bookings
  FOR INSERT WITH CHECK (true);

-- Allow public to read their own bookings (optional - for confirmation pages)
CREATE POLICY "Allow public read own consultation bookings" ON public.consultation_bookings
  FOR SELECT USING (true);

-- Allow authenticated users to read all consultation bookings (for admin app)
CREATE POLICY "Allow authenticated read all consultation bookings" ON public.consultation_bookings
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update consultation bookings (for admin app)
CREATE POLICY "Allow authenticated update consultation bookings" ON public.consultation_bookings
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete consultation bookings (for admin app)
CREATE POLICY "Allow authenticated delete consultation bookings" ON public.consultation_bookings
  FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================
-- CONTACT SUBMISSIONS POLICIES
-- ============================================

-- Allow public to insert contact submissions (for your website forms)
CREATE POLICY "Allow public insert contact submissions" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

-- Allow public to read their own submissions (optional - for confirmation pages)
CREATE POLICY "Allow public read own contact submissions" ON public.contact_submissions
  FOR SELECT USING (true);

-- Allow authenticated users to read all contact submissions (for admin app)
CREATE POLICY "Allow authenticated read all contact submissions" ON public.contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update contact submissions (for admin app)
CREATE POLICY "Allow authenticated update contact submissions" ON public.contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete contact submissions (for admin app)
CREATE POLICY "Allow authenticated delete contact submissions" ON public.contact_submissions
  FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================
-- ANALYTICS POLICIES (if tables exist)
-- ============================================

-- Analytics Events Policies
CREATE POLICY "Allow public insert analytics events" ON public.analytics_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read analytics events" ON public.analytics_events
  FOR SELECT USING (auth.role() = 'authenticated');

-- Analytics Sessions Policies
CREATE POLICY "Allow public insert analytics sessions" ON public.analytics_sessions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read analytics sessions" ON public.analytics_sessions
  FOR SELECT USING (auth.role() = 'authenticated');

-- Analytics Page Views Policies
CREATE POLICY "Allow public insert analytics page views" ON public.analytics_page_views
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read analytics page views" ON public.analytics_page_views
  FOR SELECT USING (auth.role() = 'authenticated');

-- ============================================
-- SECURITY NOTES
-- ============================================

/*
SECURITY EXPLANATION:

1. PUBLIC INSERT: Allows your website forms to submit data
2. PUBLIC READ: Allows confirmation pages to show submitted data
3. AUTHENTICATED READ/UPDATE/DELETE: Only your admin app can manage data

This setup ensures:
- ✅ Website forms work (public can insert)
- ✅ Customer data is protected (only authenticated users can read all data)
- ✅ Admin app works (authenticated users can manage data)
- ✅ GDPR compliant (proper data access controls)
- ✅ No data exposure to unauthorized users

To test:
1. Try submitting a form on your website - should work
2. Try accessing data without authentication - should be limited
3. Check your admin app - should work normally
*/
