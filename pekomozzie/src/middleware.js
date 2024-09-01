import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request) {
  console.log("MIDDLEWARE")
  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: ['/dashboard/:path*'],
}