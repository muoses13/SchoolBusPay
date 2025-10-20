// app/components/RecentActivity.tsx
'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Activity {
  id: string;
  message: string;
  timestamp: Date;
}

export default function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      if (db) {
        const q = query(collection(db, 'activities'), orderBy('timestamp', 'desc'), limit(5));
        const querySnapshot = await getDocs(q);
        const fetchedActivities = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp.toDate(),
        })) as Activity[];
        setActivities(fetchedActivities);
      } else {
        setActivities([
          { id: '1', message: 'New student registered: John Doe', timestamp: new Date() },
          { id: '2', message: 'New student registered: Jane Smith', timestamp: new Date() },
          { id: '3', message: 'New student registered: Peter Jones', timestamp: new Date() },
        ]);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-8">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id} className="border-b last:border-b-0 py-2">
            <p className="text-sm text-gray-600">{activity.message}</p>
            <p className="text-xs text-gray-400">{activity.timestamp.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
