import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// In static hosting (e.g., GitHub Pages), env vars are not available.
// Do NOT crash the app — provide a no-op fallback client so pages render.
function createNoopClient() {
  const noop = async () => ({ data: null, error: null } as any);
  return {
    from() {
      return {
        insert: noop,
        upsert: noop,
        select: noop,
        update: noop,
        delete: noop,
      } as any;
    },
  } as any;
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createNoopClient();

if (!supabaseUrl || !supabaseAnonKey) {
  // eslint-disable-next-line no-console
  console.warn('[Supabase] Environment variables missing. Using no-op client (forms will not persist).');
}
