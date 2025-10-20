// app/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase';

export async function addStudent(prevState: any, formData: FormData) {
    const data = {
        name: formData.get('name'),
        grade: formData.get('grade'),
        status: formData.get('status'),
    };
    try {
        const docRef = await addDoc(collection(db, "students"), data);
        revalidatePath('/students')
        return { message: `Student added successfully` };
    } catch (e) {
        return { message: 'Failed to add student' };
    }
}
