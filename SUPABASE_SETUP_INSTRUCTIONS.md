# Supabase Database Setup Instructions

## 🎯 Quick Fix for Missing Columns

Your database tables are missing some required columns. Follow these steps to fix them:

### Step 1: Run the Database Fix Script

1. **Go to your Supabase Dashboard**
2. **Click "SQL Editor"** in the left sidebar
3. **Click "New Query"**
4. **Copy and paste the entire contents** of `fix_database_tables.sql`
5. **Click "Run"**
6. **Wait for "Success" message**

### Step 2: Verify the Fix

After running the script, check your Table Editor:

1. **Click "Table Editor"** in the left sidebar
2. **Click on `contact_submissions` table**
3. **Verify you see these columns:**
   - `id` (uuid)
   - `name` (text)
   - `email` (text)
   - `phone` (text)
   - `business_name` (text) ← **This should now exist**
   - `message` (text) ← **This should now exist**
   - `status` (text)
   - `email_sent` (boolean)
   - `email_sent_at` (timestamptz)
   - `admin_notes` (text)
   - `created_at` (timestamptz)
   - `updated_at` (timestamptz)

4. **Click on `consultation_bookings` table**
5. **Verify you see these columns:**
   - `id` (uuid)
   - `full_name` (text)
   - `email` (text)
   - `phone` (text)
   - `company_name` (text) ← **This should now exist**
   - `area_of_service` (text) ← **This should now exist**
   - `status` (text)
   - `email_sent` (boolean)
   - `email_sent_at` (timestamptz)
   - `admin_notes` (text)
   - `created_at` (timestamptz)
   - `updated_at` (timestamptz)

### Step 3: Test Your Forms

1. **Go to your website**
2. **Fill out the contact form** with all fields
3. **Submit the form**
4. **Check your Supabase Table Editor** - you should see the new row with all data
5. **Repeat for the consultation booking form**

### Step 4: Test Database Connection (Optional)

If you want to verify everything is working programmatically:

1. **Update the Supabase credentials** in `test_database_connection.js`
2. **Run the test script** to verify connection and table structure

## 🔧 What the Fix Script Does

The `fix_database_tables.sql` script will:

✅ **Add missing columns** to both tables  
✅ **Add status tracking** (pending/completed/canceled)  
✅ **Add email tracking** (sent/not sent)  
✅ **Add admin notes** for management  
✅ **Create indexes** for fast queries  
✅ **Add security policies** for admin access  
✅ **Add documentation** comments  
✅ **Verify table structure** at the end  

## 🚨 If You Still Have Issues

### Common Problems:

1. **"Column already exists" errors** - This is normal, the script uses `IF NOT EXISTS`
2. **Permission errors** - Make sure you're logged into Supabase with admin access
3. **Tables don't exist** - Run the original table creation SQL first

### Manual Column Addition:

If the script doesn't work, add columns manually:

```sql
-- For contact_submissions
ALTER TABLE contact_submissions ADD COLUMN business_name text DEFAULT '';
ALTER TABLE contact_submissions ADD COLUMN message text DEFAULT '';

-- For consultation_bookings  
ALTER TABLE consultation_bookings ADD COLUMN company_name text DEFAULT '';
ALTER TABLE consultation_bookings ADD COLUMN area_of_service text DEFAULT '';
```

## 📋 Next Steps After Fix

Once your database is fixed:

1. ✅ **Test your forms** - Submit test data
2. ✅ **Check Table Editor** - Verify data appears
3. ✅ **Build your admin app** - Use the queries from `ADMIN_APP_QUERIES.md`
4. ✅ **Set up email automation** - Follow `SUPABASE_EMAIL_SETUP.md`

## 🆘 Need Help?

If you're still having issues:

1. **Copy the exact error message** from Supabase SQL Editor
2. **Take a screenshot** of your Table Editor showing missing columns
3. **Let me know** what you see and I'll help fix it!

---

**The fix script should resolve all your missing column issues!** 🚀
