// app/components/Dashboard.tsx
'use client'

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Dashboard() {
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        const fetchStudentCount = async () => {
            const querySnapshot = await getDocs(collection(db, "students"));
            setStudentCount(querySnapshot.size);
        };

        fetchStudentCount();
    }, []);

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-100 p-4 rounded-md">
                    <h3 className="text-md font-semibold">Total Students</h3>
                    <p className="text-2xl font-bold">{studentCount}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-md">
                     <h3 className="text-md font-semibold">Payments</h3>
                     <p className="text-2xl font-bold">-</p>
                </div>
                 <div className="bg-yellow-100 p-4 rounded-md">
                     <h3 className="text-md font-semibold">Reports</h3>
                     <p className="text-2xl font-bold">-</p>
                </div>
            </div>
        </div>
    );
}
