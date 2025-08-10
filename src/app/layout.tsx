
'use client';

import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from '@/components/theme-provider';

// This is a client component, so we can't use metadata export
// export const metadata: Metadata = {
//   title: 'Well Trained Freak',
//   description: 'A complete training ecosystem for athletes and non-athletes.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Well Trained Freak</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
            <NextNProgress color="#EF4444" height={3} />
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
