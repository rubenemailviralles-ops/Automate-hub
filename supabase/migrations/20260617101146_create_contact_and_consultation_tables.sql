-- Contact messages table (from Contact page and ContactForm component)
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_name TEXT,
  message TEXT NOT NULL,
  budget TEXT,
  source TEXT DEFAULT 'contact',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Consultation bookings table (from ConsultationBooking page)
CREATE TABLE consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  area_of_service TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Public can insert contact messages (no auth required for form submission)
CREATE POLICY "insert_contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Authenticated admin can read contact messages
CREATE POLICY "select_contact_messages" ON contact_messages
  FOR SELECT TO authenticated USING (true);

-- Authenticated admin can update contact messages
CREATE POLICY "update_contact_messages" ON contact_messages
  FOR UPDATE TO authenticated USING (true);

-- Authenticated admin can delete contact messages
CREATE POLICY "delete_contact_messages" ON contact_messages
  FOR DELETE TO authenticated USING (true);

-- Public can insert consultations (no auth required for form submission)
CREATE POLICY "insert_consultations" ON consultations
  FOR INSERT WITH CHECK (true);

-- Authenticated admin can read consultations
CREATE POLICY "select_consultations" ON consultations
  FOR SELECT TO authenticated USING (true);

-- Authenticated admin can update consultations
CREATE POLICY "update_consultations" ON consultations
  FOR UPDATE TO authenticated USING (true);

-- Authenticated admin can delete consultations
CREATE POLICY "delete_consultations" ON consultations
  FOR DELETE TO authenticated USING (true);
