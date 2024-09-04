'use server'

import { createClient } from '@/utils/supabase/server'

export async function feed(formData) {

  const appData = {
    company: formData.get('company'),
    role: formData.get('role'),
    notes: formData.get('notes')
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from('job_apps')
    .insert([appData])

  if (error) console.log('Error inserting app data: ', error);
}