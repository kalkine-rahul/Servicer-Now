// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CraftConnect - Find Trusted Service Professionals',
  description: 'Book experienced plumbers, carpenters, painters, and builders in your city. Quality service guaranteed.',
  keywords: 'plumber, carpenter, painter, builder, home services, professionals, handyman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}