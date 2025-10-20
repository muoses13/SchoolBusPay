// app/components/AddStudentForm.tsx

'use client'

import { useFormState } from 'react-dom'
import { addStudent } from '@/app/students/actions'

const initialState = {
  message: null,
}

export function AddStudentForm() {
  const [state, formAction] = useFormState(addStudent, initialState)

  return (
    <form action={formAction}>
       <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h2 className="text-lg font-semibold mb-4">Add New Student</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                <input type="text" id="grade" name="grade" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
        </div>
        <div className="mt-4">
             <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
             <select id="status" name="status" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Paid</option>
                <option>Unpaid</option>
            </select>
        </div>
        <div className="mt-4">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Student</button>
        </div>
         {state.message && <p className="mt-4 text-sm text-red-600">{state.message}</p>}
      </div>
    </form>
  )
}
