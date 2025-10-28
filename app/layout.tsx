import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  description: "Focusing on network architecture, protocol analysis, and system programming. Network engineering and system programming projects.",
  keywords: ["network engineering", "system programming", "cybersecurity", "cloud architecture", "software development"],
  authors: [{ name: "Muhammad Saad Shabir" }],
  creator: "Muhammad Saad Shabir",
  publisher: "Muhammad Saad Shabir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muhammad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming. Network engineering and system programming projects.",
    url: "https://msaadshabir.vercel.app/",
    siteName: "Muhammad Saad Shabir",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saad Shabir",
    description: "Focusing on network architecture, protocol analysis, and system programming.",
    creator: "@msaadshabir",
  },
  alternates: {
    canonical: "https://msaadshabir.vercel.app/",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Muhammad Saad Shabir",
      "jobTitle": "Network Technician & Software Developer",
      "description": "Focusing on network architecture, protocol analysis, and system programming",
      "url": "https://msaadshabir.vercel.app/",
      "sameAs": [
        "https://github.com/msaadshabir",
        "https://www.linkedin.com/in/msaadshabir/"
      ],
      "knowsAbout": [
        "Network Architecture",
        "Protocol Analysis",
        "System Programming",
        "Cybersecurity",
        "Cloud Architecture"
      ]
    }),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
