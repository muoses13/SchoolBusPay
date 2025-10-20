import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Merion School Bus Payment Tracking',
  description: 'A web app to track school bus payments for Merion School.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <div className="w-64">
            <Sidebar />
          </div>
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
