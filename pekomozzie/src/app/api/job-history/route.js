//import { supabase } from '@/lib/supabaseClient'
import { createClient } from '../../../utils/supabase/server.js'

export async function GET(request) {
  try {
    const supabase = createClient()
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser()
    if (userError) {
      console.error('Error fetching user:', userError)
      return new Response(JSON.stringify({ error: 'Failed to get user' }), {
        status: 401
      })
    } else {
      console.log('current user', user)
    }
    const user_id = user.id
    const { data } = await supabase
      .from('job_apps')
      .select('created_at, company, role')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false })
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error('Error handling GET request:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500
    })
  }
}
