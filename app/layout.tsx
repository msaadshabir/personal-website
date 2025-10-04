import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
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
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
