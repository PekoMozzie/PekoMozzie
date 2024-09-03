'use client';

import { createClient } from '@/utils/supabase/client.js';

export default function LinkedIn() {

  async function signInWithLinkedIn() {
    const supabase = createClient();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const redirectTo = `${baseUrl}/api/auth/callback`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc', 
      options: {
        redirectTo,
      },
    });
    
    if (error) {
      console.error('Error during LinkedIn OAuth sign-in:', error.message);
    } else {
      console.log('LinkedIn sign-in successful:', data);
    }
  }
  
  return (
    <button
      className="w-full max-w-sm p-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 flex items-center justify-center space-x-2 shadow-lg"
      onClick={signInWithLinkedIn}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.451 20.451h-3.636v-5.606c0-1.337-.026-3.06-1.867-3.06-1.867 0-2.153 1.459-2.153 2.966v5.7h-3.635V9.998h3.491v1.428h.05c.486-.921 1.675-1.89 3.448-1.89 3.689 0 4.37 2.429 4.37 5.588v5.327zM5.337 8.57c-1.173 0-2.124-.953-2.124-2.124 0-1.17.951-2.124 2.124-2.124s2.124.954 2.124 2.124c0 1.171-.951 2.124-2.124 2.124zm1.819 11.881H3.518V9.998h3.638v10.453zM22.225 0H1.771C.792 0 0 .793 0 1.771v20.458C0 23.207.792 24 1.771 24h20.454c.979 0 1.771-.793 1.771-1.771V1.771C24 .793 23.207 0 22.225 0z"/>
      </svg>
      <span>Sign In with LinkedIn</span>
    </button>
  );
}
