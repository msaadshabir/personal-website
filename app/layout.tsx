import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeToggle } from '../components/ThemeToggle';
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad",
  description: "Focusing on network architecture, protocol analysis, and system programming.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Muhmmad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
    type: "website",
    url: "https://saad-pw.vercel.app/",
  },
  twitter: {
    card: "summary",
    title: "Muhmmad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
