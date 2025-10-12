import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Saad Shabir",
  description: "Focusing on network architecture, protocol analysis, and system programming.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Muhmmad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
    type: "website",
    url: "https://msaadshabir.vercel.app/",
  },
  twitter: {
    card: "summary",
    title: "Muhmmad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
  },
};

export const viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
