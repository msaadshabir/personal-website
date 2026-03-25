import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.name,
  description: `${SITE_CONFIG.description} Network engineering and system programming projects.`,
  keywords: ["network engineering", "system programming", "cybersecurity", "cloud architecture", "software development"],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  openGraph: {
    title: SITE_CONFIG.name,
    description: `${SITE_CONFIG.description} Network engineering and system programming projects.`,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_CONFIG.name,
    description: `${SITE_CONFIG.description} Network engineering and system programming projects.`,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": SITE_CONFIG.name,
      "jobTitle": SITE_CONFIG.jobTitle,
      "description": SITE_CONFIG.description,
      "url": SITE_CONFIG.url,
      "sameAs": [
        SITE_CONFIG.github,
        SITE_CONFIG.linkedin
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

export const viewport: Viewport = {
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
    <html lang="en" className={inter.variable} data-theme="stone-editorial">
      <body className="min-h-screen font-sans leading-relaxed antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
