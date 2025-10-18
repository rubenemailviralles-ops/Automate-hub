# Render Environment Variables Setup

## 🔧 Add These Environment Variables to Render

Go to your Render Dashboard → Your Service → Environment tab and add these EXACT variables:

### **Variable 1:**
```
Name: VITE_SUPABASE_URL
Value: https://vibevjzpdkvttbfdtive.supabase.co
```

### **Variable 2:**
```
Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmV2anpwZGt2dHRiZmR0aXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzcwNTUsImV4cCI6MjA3NDQ1MzA1NX0.eA5mWnDKodvPwCvSYZvWaguiTizIKYnfTjQwRj_27dE
```

## 📋 Steps to Add:

1. **Go to Render Dashboard**
2. **Click on your Automate Hub service**
3. **Click "Environment" tab**
4. **Click "Add Environment Variable"**
5. **Add the first variable** (VITE_SUPABASE_URL)
6. **Click "Add Environment Variable" again**
7. **Add the second variable** (VITE_SUPABASE_ANON_KEY)
8. **Click "Save Changes"**
9. **Wait for automatic redeploy** (usually 2-3 minutes)

## ✅ Verification Steps:

After adding the environment variables and redeploying:

1. **Go to your live website**
2. **Open browser developer tools** (F12)
3. **Go to Console tab**
4. **Submit a test form**
5. **Check for any error messages**

## 🎯 Expected Results:

- ✅ No "Missing Supabase environment variables" errors
- ✅ Forms submit successfully
- ✅ Data appears in your Supabase Table Editor
- ✅ Success messages show on your website

## 🚨 If Still Not Working:

Check the browser console for these common errors:
- "Missing Supabase environment variables" → Environment variables not set
- "Failed to fetch" → Network/CORS issue
- "Invalid API key" → Wrong anon key
- "Table doesn't exist" → Database not set up correctly

## 📞 Need Help?

If you're still having issues:
1. **Screenshot the browser console errors**
2. **Check if the environment variables are showing in Render**
3. **Verify the redeploy completed successfully**

---

**Your Supabase credentials are correct! Just add these environment variables to Render and your forms will work!** 🚀
