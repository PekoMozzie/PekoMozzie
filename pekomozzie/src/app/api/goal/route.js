import { supabase } from '@/lib/supabaseClient'

export async function POST(req) {
  console.log('API  route called')
  try {
    const { weeklyGoal } = await req.json()
    const dailyQuota = Math.ceil(weeklyGoal / 7)
    console.log('weeklyGoal:', weeklyGoal)

    if (!weeklyGoal) {
      return new Response(JSON.stringify({ error: 'weeklyGoal is required' }), {
        status: 400
      })
    }

    const { data, error } = await supabase
      .from('goals')
      .insert([{ weekly_quota: weeklyGoal, daily_quota: dailyQuota }])

    if (error) {
      console.error('Supabase error:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      })
    }

    return new Response(JSON.stringify({ data }), { status: 200 })
  } catch (error) {
    console.error('Error handling POST request:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500
    })
  }
}


