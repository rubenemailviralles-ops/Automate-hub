# 🚀 Admin App Setup Guide

## 📋 **Step 1: Get Your Supabase Credentials**

1. **Go to your Supabase Dashboard**
2. **Click Settings** (gear icon in left sidebar)
3. **Click "API"** in the settings menu
4. **Copy these values:**
   - **Project URL**: `https://your-project-id.supabase.co`
   - **API Key**: `anon public` key (the long string)

## 🔧 **Step 2: Update Admin App Credentials**

1. **Open** `admin-app/src/lib/supabase.ts`
2. **Replace** the placeholder values:

```typescript
const supabaseUrl = 'https://your-actual-project-id.supabase.co' // Your Project URL
const supabaseKey = 'your-actual-anon-public-key' // Your anon public key
```

## 🗄️ **Step 3: Add Missing Columns to Your Tables**

Your tables need a few extra columns for the admin app to work properly:

### **For `contact_submissions` table:**
```sql
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS is_read BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;
```

### **For `consultation_bookings` table:**
```sql
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS is_booked BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;
```

## 🚀 **Step 4: Run the Admin App**

```bash
cd admin-app
npm run dev
```

## ✅ **Step 5: Test the App**

1. **Open** `http://localhost:5173` in your browser
2. **Check** if data loads from your Supabase tables
3. **Test** the copy buttons and archive functionality

## 🔍 **Troubleshooting**

### **If you see "No data" or errors:**

1. **Check your Supabase credentials** are correct
2. **Make sure the table names match:**
   - `contact_submissions` (not `contact_messages`)
   - `consultation_bookings`
3. **Verify the column names:**
   - `full_name` (not `name`)
   - `email`
   - `phone` (optional)
   - `message` (optional)

### **If copy buttons don't work:**
- Make sure you're using HTTPS or localhost
- Check browser console for errors

## 📱 **How to Use the App**

1. **Dashboard**: Overview of all messages and consultations
2. **Contact Messages**: View unread messages, copy contact details, mark as read
3. **Consultations**: View pending bookings, copy contact details, mark as booked
4. **Archives**: View all archived messages and consultations

## 🎯 **Features**

- ✅ **Copy buttons** for email and phone numbers
- ✅ **Mark as read** for contact messages
- ✅ **Mark as booked** for consultations
- ✅ **Archive system** with separate sections
- ✅ **Real-time updates** from Supabase
- ✅ **Same design** as your website

Your admin app is ready to use! 🚀
