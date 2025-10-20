// app/components/Dashboard.tsx
'use client'

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import StudentChart from './StudentChart';
import RecentActivity from './RecentActivity';

export default function Dashboard() {
    const [studentCount, setStudentCount] = useState(0);
    const [newStudents, setNewStudents] = useState(0);
    const [activeStudents, setActiveStudents] = useState(0);

    useEffect(() => {
        const fetchStudentData = async () => {
            // Use a mock count if db is not available
            if (db) {
                const querySnapshot = await getDocs(collection(db, "students"));
                setStudentCount(querySnapshot.size);

                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

                const newStudentCount = querySnapshot.docs.filter(doc => {
                    const createdAt = doc.data().createdAt?.toDate();
                    return createdAt && createdAt > thirtyDaysAgo;
                }).length;
                setNewStudents(newStudentCount);

                const activeStudentCount = querySnapshot.docs.filter(doc => doc.data().status === 'active').length;
                setActiveStudents(activeStudentCount);

            } else {
                setStudentCount(3); // Mock student count
                setNewStudents(1); // Mock new students
                setActiveStudents(2); // Mock active students
            }
        };

        fetchStudentData();
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
                    <h3 className="text-md font-semibold">New Students (Last 30 Days)</h3>
                    <p className="text-2xl font-bold">{newStudents}</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-md">
                    <h3 className="text-md font-semibold">Active Students</h3>
                    <p className="text-2xl font-bold">{activeStudents}</p>
                </div>
                <div className="bg-red-100 p-4 rounded-md">
                     <h3 className="text-md font-semibold">Payments</h3>
                     <p className="text-2xl font-bold">-</p>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Student Distribution</h3>
                <StudentChart />
            </div>
            <RecentActivity />
        </div>
    );
}
