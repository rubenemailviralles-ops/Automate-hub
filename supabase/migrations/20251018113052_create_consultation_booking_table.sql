/*
  # Create Consultation Booking Submissions Table

  1. New Tables
    - `consultation_bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `full_name` (text) - Client's full name
      - `email` (text) - Client's email address
      - `phone` (text, nullable) - Client's phone number (optional)
      - `company_name` (text, nullable) - Client's company name (optional)
      - `area_of_service` (text) - Selected service area (website-creation, crm-integration, etc.)
      - `created_at` (timestamptz) - Timestamp when booking was created
      - `updated_at` (timestamptz) - Timestamp when booking was last updated

  2. Security
    - Enable RLS on `consultation_bookings` table
    - Add policy for inserting new bookings (public access for form submission)
    - Add policy for authenticated users to read all bookings (admin access)

  3. Important Notes
    - Public users can INSERT bookings (for form functionality)
    - Only authenticated users can SELECT bookings (for admin review)
    - Phone and company_name are optional fields
    - area_of_service stores the selected service option
*/

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company_name text DEFAULT '',
  area_of_service text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert consultation bookings (for public form)
CREATE POLICY "Anyone can submit consultation booking"
  ON consultation_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only authenticated users can read bookings (admin access)
CREATE POLICY "Authenticated users can read bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on created_at for efficient querying
CREATE INDEX IF NOT EXISTS consultation_bookings_created_at_idx 
  ON consultation_bookings(created_at DESC);