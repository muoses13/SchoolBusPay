// app/admin/actions.ts
'use server'

import { addAdmin } from '@/lib/admins';
import { revalidatePath } from 'next/cache';

export async function addAdminAction(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  if (name && email) {
    addAdmin({ name, email });
    revalidatePath('/admin');
  }
}
