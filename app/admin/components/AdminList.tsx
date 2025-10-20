// app/admin/components/AdminList.tsx
'use client'
import { Admin } from '@/lib/admins';

interface AdminListProps {
  initialAdmins: Admin[];
}

export function AdminList({ initialAdmins }: AdminListProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin List</h2>
      <ul className="divide-y divide-gray-200">
        {initialAdmins.map(admin => (
          <li key={admin.id} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-medium text-gray-900">{admin.name}</p>
              <p className="text-sm text-gray-500">{admin.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
