'use server'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { revalidatePath } from 'next/cache'

interface AddStudentState {
  message: string | null;
}

// Function to add an activity to the 'activities' collection
async function addActivity(type: string, details: string) {
  try {
    await addDoc(collection(db, 'activities'), {
      type,
      details,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding activity: ', error);
    // Handle the error appropriately
  }
}

export async function addStudent(prevState: AddStudentState, formData: FormData): Promise<AddStudentState> {
  const student = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    course: formData.get('course') as string,
  }

  try {
    const docRef = await addDoc(collection(db, 'students'), student)
    // Add an activity for the new student
    await addActivity('New Student', `A new student, ${student.name}, was added.`);
    revalidatePath('/students')
    revalidatePath('/') // Revalidate the dashboard page to show the new activity
    return { message: `Student added successfully with ID: ${docRef.id}` }
  } catch (e) {
    console.error('Error adding document: ', e)
    return { message: 'Failed to add student' }
  }
}
