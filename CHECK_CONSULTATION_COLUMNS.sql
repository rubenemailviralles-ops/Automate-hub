-- Run this in Supabase SQL Editor to see what columns exist in consultation_bookings

SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings'
ORDER BY ordinal_position;

