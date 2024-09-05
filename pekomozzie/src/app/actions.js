'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server.js'

export async function login(formData) {
  const supabase = createClient()

  // TODO: validate inputs
  const loginData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const {data, error} = await supabase.auth.signInWithPassword(loginData);

  if (error) {
    redirect('/?modal=wrongCreds');
  }

  console.log(`${data.user.email} logged in`)
  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)
  console.log(error)
  if (error) {
    redirect('/?modal=whoaThere')
  }

  revalidatePath('/', 'layout');
  redirect('/?modal=signedUp');
}
