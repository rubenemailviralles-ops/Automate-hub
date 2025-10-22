-- Add company column to consultation_bookings table
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS company TEXT;

-- Verify the column was added
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings';

