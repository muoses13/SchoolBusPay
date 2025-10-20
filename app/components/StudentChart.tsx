// app/components/StudentChart.tsx
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useEffect, useState } from 'react';

interface Student {
  id: string;
  name: string;
  email: string;
}

export default function StudentChart() {
  const [data, setData] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (db) {
        const querySnapshot = await getDocs(collection(db, 'students'));
        const students = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) as Student[];
        setData(students);
      } else {
        setData([
          { id: '1', name: 'John Doe', email: 'john@example.com' },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
          { id: '3', name: 'Peter Jones', email: 'peter@example.com' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="name" fill="#8884d8" />
    </BarChart>
  );
}
