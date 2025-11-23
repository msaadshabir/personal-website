import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code if available
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
    "script:ld+json": JSON.stringify({
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
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen bg-zinc-50 text-zinc-700 font-sans tracking-tight">
          {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
