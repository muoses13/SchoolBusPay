// app/admin/components/AddAdminForm.tsx
'use client'
import { useTransition } from 'react';
import { addAdminAction } from '../actions';

export function AddAdminForm() {
  const [isPending, startTransition] = useTransition();

  async function handleAddAdmin(formData: FormData) {
    startTransition(async () => {
      await addAdminAction(formData);
    });
  }

  return (
    <form action={handleAddAdmin} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Admin</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
      </div>
      <button type="submit" disabled={isPending} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
        {isPending ? 'Adding...' : 'Add Admin'}
      </button>
    </form>
  );
}
