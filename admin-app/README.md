# Automate Hub Admin App

A simple admin dashboard for managing contact messages and consultation bookings from your Automate Hub website.

## Features

- **Contact Messages**: View and manage contact form submissions
- **Consultation Bookings**: Manage consultation requests and appointments
- **Copy Buttons**: Easy copy-to-clipboard for email and phone numbers
- **Archive System**: Mark messages as read and consultations as booked
- **Real-time Updates**: Connected to your Supabase database
- **Same Design**: Matches your website's dark theme and styling

## Setup

1. **Install Dependencies**
   ```bash
   cd admin-app
   npm install
   ```

2. **Configure Supabase**
   - Update `src/lib/supabase.ts` with your Supabase URL and API key
   - Make sure your database has the required tables:
     - `contact_messages` (id, name, email, phone, message, created_at, is_read, archived_at)
     - `consultation_bookings` (id, name, email, phone, company, service_interest, preferred_date, preferred_time, message, created_at, is_booked, archived_at)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Database Schema

### Contact Messages Table
```sql
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE,
  archived_at TIMESTAMP WITH TIME ZONE
);
```

### Consultation Bookings Table
```sql
CREATE TABLE consultation_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service_interest TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_booked BOOLEAN DEFAULT FALSE,
  archived_at TIMESTAMP WITH TIME ZONE
);
```

## Usage

1. **Dashboard**: Overview of all messages and consultations
2. **Contact Messages**: View unread messages, copy contact details, mark as read
3. **Consultations**: View pending consultations, copy contact details, mark as booked
4. **Archives**: View all archived messages and consultations

## Deployment

The app can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

Just run `npm run build` and upload the `dist` folder to your hosting service.
