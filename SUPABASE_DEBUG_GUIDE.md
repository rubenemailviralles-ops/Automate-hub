# 🔍 Supabase Debug Guide

## 🚨 **Current Issue: Forms Not Submitting to Supabase**

### **Step 1: Test Supabase Connection**

1. **Open `test-supabase.html`** in your browser
2. **Tell me what you see** - any errors or success messages?

### **Step 2: Check Your Supabase Tables**

**In your Supabase Dashboard:**

1. **Go to Table Editor**
2. **Check if these tables exist:**
   - `contact_submissions`
   - `consultation_bookings`
3. **Tell me the exact column names** in each table

### **Step 3: Check RLS (Row Level Security)**

**In your Supabase Dashboard:**

1. **Go to Authentication → Policies**
2. **Check if RLS is enabled** on your tables
3. **If enabled, run this SQL:**

```sql
-- Disable RLS to allow form submissions
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;
```

### **Step 4: Check Table Structure**

**Run this SQL in Supabase SQL Editor:**

```sql
-- Check table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
ORDER BY ordinal_position;

SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings' 
ORDER BY ordinal_position;
```

### **Step 5: Test Insert Manually**

**Run this SQL in Supabase SQL Editor:**

```sql
-- Test insert into contact_submissions
INSERT INTO contact_submissions (name, email, message) 
VALUES ('Test User', 'test@example.com', 'Test message');

-- Test insert into consultation_bookings
INSERT INTO consultation_bookings (name, email, phone, company, service) 
VALUES ('Test User', 'test@example.com', '123-456-7890', 'Test Company', 'website-creation');
```

### **Step 6: Check Admin App Debug Page**

1. **Go to your admin app**: `http://localhost:5173/admin/`
2. **Click "Debug"** in the navigation
3. **Tell me what you see** in each test result

## 🔧 **Common Issues & Fixes:**

### **Issue 1: RLS Blocking Inserts**
**Fix:** Disable RLS or create policies (see Step 3)

### **Issue 2: Wrong Column Names**
**Fix:** Update forms to match your actual column names

### **Issue 3: Missing Columns**
**Fix:** Add missing columns to your tables

### **Issue 4: Wrong Table Names**
**Fix:** Update forms to use correct table names

## 📱 **What to Tell Me:**

1. **What you see in `test-supabase.html`**
2. **What columns your tables actually have**
3. **What errors you see in the admin app Debug page**
4. **Whether RLS is enabled on your tables**

## 🎯 **Expected Result:**

After fixing these issues:
- ✅ Forms submit successfully
- ✅ Data appears in admin app
- ✅ Copy buttons work
- ✅ Archive functionality works

**Let me know what you find in each step!** 🔍
