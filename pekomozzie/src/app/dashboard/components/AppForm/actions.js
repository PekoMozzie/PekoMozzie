'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function feed(formData) {
  
  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();
  const uid = user.id;

  const appData = {
    company: formData.get('company'),
    role: formData.get('role'),
    notes: formData.get('notes'),
    user_id: uid
  }

  const { error } = await supabase
    .from('job_apps')
    .insert([appData])

  if (error) console.log('Error inserting app data: ', error);

  revalidatePath('/', 'layout');
  redirect('/dashboard?modal=fed');
}