-- Create admin_users table for simple admin auth
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only authenticated can read admin_users
CREATE POLICY "select_admin_users" ON admin_users
  FOR SELECT TO authenticated USING (true);
