'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Students', href: '/students' },
  { name: 'Payments', href: '/payments' },
  { name: 'Reports', href: '/reports' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800 text-white">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <p className="text-lg font-bold">Merion School</p>
          <p className="text-sm">Bus Payments</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {
          navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
                  ${isActive ? 'bg-sky-100 text-blue-600' : ''}`}>
                <p className="hidden md:block">{link.name}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}
