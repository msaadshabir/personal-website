import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Muhammad Saad Shabir",
  description: "Focusing on network architecture, protocol analysis, and system programming.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Muhammad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
    type: "website",
    url: "https://msaadshabir.vercel.app/",
  },
};

export const viewport = {
  themeColor: "#fafafa", // zinc-50
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-sans">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
