-- Analytics Tables Setup for Admin App
-- Run this in your Supabase SQL editor

-- Create analytics_events table to track all user interactions
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL, -- 'page_view', 'button_click', 'form_submit', 'cta_click'
  event_name VARCHAR(100) NOT NULL, -- 'Book Consultation', 'Contact Form', etc.
  page_path VARCHAR(200) NOT NULL, -- '/', '/contact', '/book-consultation'
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  session_id VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  metadata JSONB -- Store additional event data
);

-- Create analytics_sessions table to track user sessions
CREATE TABLE IF NOT EXISTS analytics_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(100) UNIQUE NOT NULL,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  country VARCHAR(100),
  city VARCHAR(100),
  device_type VARCHAR(50), -- 'desktop', 'mobile', 'tablet'
  browser VARCHAR(100),
  os VARCHAR(100),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  page_views INTEGER DEFAULT 0,
  events_count INTEGER DEFAULT 0
);

-- Create analytics_page_views table for detailed page tracking
CREATE TABLE IF NOT EXISTS analytics_page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(100) NOT NULL,
  page_path VARCHAR(200) NOT NULL,
  page_title VARCHAR(200),
  referrer TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  time_on_page INTEGER, -- seconds spent on page
  scroll_depth INTEGER, -- percentage scrolled
  metadata JSONB
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_page_path ON analytics_events(page_path);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_session_id ON analytics_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_started_at ON analytics_sessions(started_at);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_session_id ON analytics_page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_created_at ON analytics_page_views(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (adjust based on your auth setup)
-- These policies allow admin users to read analytics data
-- You may need to adjust these based on your authentication setup

-- Allow reading analytics data (you may need to adjust this based on your auth)
CREATE POLICY "Allow read analytics data" ON analytics_events
  FOR SELECT USING (true);

CREATE POLICY "Allow read sessions data" ON analytics_sessions
  FOR SELECT USING (true);

CREATE POLICY "Allow read page views data" ON analytics_page_views
  FOR SELECT USING (true);

-- Allow inserting analytics data (for the website to send data)
CREATE POLICY "Allow insert analytics data" ON analytics_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert sessions data" ON analytics_sessions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow insert page views data" ON analytics_page_views
  FOR INSERT WITH CHECK (true);

-- Create a view for easy analytics queries
CREATE OR REPLACE VIEW analytics_summary AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as total_events,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(CASE WHEN event_type = 'page_view' THEN 1 END) as page_views,
  COUNT(CASE WHEN event_type = 'button_click' THEN 1 END) as button_clicks,
  COUNT(CASE WHEN event_type = 'form_submit' THEN 1 END) as form_submissions,
  COUNT(CASE WHEN event_type = 'cta_click' THEN 1 END) as cta_clicks
FROM analytics_events
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Create a view for popular pages
CREATE OR REPLACE VIEW popular_pages AS
SELECT 
  page_path,
  COUNT(*) as views,
  COUNT(DISTINCT session_id) as unique_visitors
FROM analytics_events
WHERE event_type = 'page_view'
GROUP BY page_path
ORDER BY views DESC;

-- Create a view for top events
CREATE OR REPLACE VIEW top_events AS
SELECT 
  event_name,
  event_type,
  COUNT(*) as count,
  COUNT(DISTINCT session_id) as unique_users
FROM analytics_events
WHERE event_type IN ('button_click', 'cta_click', 'form_submit')
GROUP BY event_name, event_type
ORDER BY count DESC;
