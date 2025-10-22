# 🚀 Admin App - Quick Start Guide

## ✅ **Your Credentials Are Already Set!**

Your Supabase credentials have been configured:
- **URL**: `https://vibevjzpdkvttbfdtive.supabase.co`
- **API Key**: Configured ✅

## 🔧 **Step 1: Add Missing Columns to Supabase**

**Go to your Supabase Dashboard → SQL Editor and run this:**

```sql
-- Add missing columns to your Supabase tables for the admin app

-- For contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS is_read BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- For consultation_bookings table  
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS is_booked BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;
```

## 🚀 **Step 2: Run the Admin App**

The development server should be starting automatically. If not, run:

```bash
cd admin-app
npm run dev
```

## 📱 **Step 3: Open Your Admin App**

**Open your browser and go to:** `http://localhost:5173`

## 🎯 **What You'll See:**

1. **Dashboard**: Overview of all messages and consultations
2. **Contact Messages**: View unread messages with copy buttons
3. **Consultations**: View pending bookings with copy buttons
4. **Archives**: View all archived items

## ✨ **Features Ready to Use:**

- ✅ **Copy buttons** for email and phone numbers
- ✅ **Mark as read** for contact messages  
- ✅ **Mark as booked** for consultations
- ✅ **Archive system** with separate sections
- ✅ **Real-time updates** from your Supabase
- ✅ **Same design** as your website

## 🔍 **If You See "No Data":**

1. **Check** that you ran the SQL commands above
2. **Verify** your tables have data in them
3. **Check** the browser console for any errors

## 🎉 **You're Ready!**

Your admin app is now connected to your Supabase database and ready to manage all your leads and bookings! 🚀
