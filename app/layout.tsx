import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AdminProvider } from '@/contexts/AdminContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Elephant Productions | Cinematic Wedding Films',
  description: 'Premium wedding photography and cinematography based in Chennai. We craft timeless, emotional stories for modern couples.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
