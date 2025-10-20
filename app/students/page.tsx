import StudentTable from '@/app/components/StudentTable';
import { AddStudentForm } from '@/app/components/AddStudentForm';

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Student Management</h1>
      <AddStudentForm />
      <StudentTable />
    </div>
  );
}
