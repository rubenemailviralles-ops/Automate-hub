-- Enable pg_net extension for webhooks
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Grant usage to postgres role
GRANT USAGE ON SCHEMA net TO postgres, anon, authenticated, service_role;

-- Verify extension is installed
SELECT * FROM pg_extension WHERE extname = 'pg_net';

