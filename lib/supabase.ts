// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Client-side client
export const supabaseClient = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_ANON_KEY ?? ''
);

// Server-side client (for actions/pages)
export const supabaseServer = () => {
  const cookieStore = cookies();
  return createServerClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_ANON_KEY ?? '',
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
};

// Admin client for server actions (uses service role)
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  { auth: { autoRefreshToken: false, persistSession: false } }
);
