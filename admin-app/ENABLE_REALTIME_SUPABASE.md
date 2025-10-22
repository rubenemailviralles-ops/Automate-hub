# 🔔 Enable Real-time Notifications in Supabase

## ⚠️ IMPORTANT: Realtime Must Be Enabled

For notifications to work, you MUST enable Realtime in your Supabase project.

## 🚀 How to Enable Realtime

### Step 1: Go to Supabase Dashboard
Visit: https://supabase.com/dashboard

### Step 2: Select Your Project
Click on "Automate Hub" project

### Step 3: Go to Database Settings
1. Click **"Database"** in left sidebar
2. Click **"Replication"** tab

### Step 4: Enable Realtime for Tables
Enable Realtime for these tables:
- ✅ **contact_submissions**
- ✅ **consultation_bookings**

**How to Enable:**
1. Find each table in the list
2. Toggle the switch to **ON** (green)
3. Click **Save**

### Step 5: Verify
Run this SQL in SQL Editor to verify:

```sql
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('contact_submissions', 'consultation_bookings');
```

## 🔔 After Enabling

Your notifications will work:
- ✅ Instant alerts when forms submitted
- ✅ Real-time updates in admin app
- ✅ No refresh needed

## 🆘 Still Not Working?

### Check RLS Policies
Make sure your tables have proper Row Level Security policies:

```sql
-- Allow anonymous inserts (from website forms)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON consultation_bookings
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow authenticated reads (admin app)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated reads" ON consultation_bookings
  FOR SELECT TO authenticated
  USING (true);
```

### Check API Key
Make sure you're using the correct Supabase URL and API key in:
- `admin-app/src/lib/supabase.ts`

## ✅ Checklist

- [ ] Realtime enabled for `contact_submissions`
- [ ] Realtime enabled for `consultation_bookings`
- [ ] RLS policies allow inserts and reads
- [ ] Notifications enabled in admin app
- [ ] Test notification works

---

**After enabling Realtime, your notifications will work instantly!** 🚀

