import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request) {

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  console.log("Received code:", code);
  
  // const next = '/dashboard';

  if (code) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      if (!error) {
        const forwardedHost = request.headers.get('x-forwarded-host');
        const isLocalEnv = process.env.NODE_ENV === 'development';
        
        if (isLocalEnv) {
          return NextResponse.redirect(`${origin}${next}`);
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`);
        } else {
          return NextResponse.redirect(`${origin}${next}`);
        }
      } else {
        console.error("Error exchanging code for session:", error.message);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
