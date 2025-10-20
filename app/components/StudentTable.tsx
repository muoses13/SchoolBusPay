// app/components/StudentTable.tsx

'use client'

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Student {
  id: string;
  name: string;
  grade: string;
  status: string;
}

const mockStudents: Student[] = [
  { id: '1', name: 'John Doe', grade: '5', status: 'Active' },
  { id: '2', name: 'Jane Smith', grade: '3', status: 'Inactive' },
  { id: '3', name: 'Peter Jones', grade: '1', status: 'Active' },
];

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      // Check if db is available, otherwise use mock data
      if (db) {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Student[];
        setStudents(studentData);
      } else {
        setStudents(mockStudents);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Students</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
