// app/admin/page.tsx
import { getAdmins } from '@/lib/admins';
import { AddAdminForm } from './components/AddAdminForm';
import { AdminList } from './components/AdminList';

export default function AdminPage() {
  const admins = getAdmins();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Management</h1>
      <AddAdminForm />
      <AdminList initialAdmins={admins} />
    </div>
  );
}
