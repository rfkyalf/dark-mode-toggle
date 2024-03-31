import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import BgAudio from '@/components/BgAudio';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dark Mode Toggle',
  description: 'Dark Mode Toggle with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
