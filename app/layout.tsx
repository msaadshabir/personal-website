import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhmmad Saad Shabir",
  description: "My singular goal is to have a net-positive impact on the world. Focusing on network architecture, protocol analysis, and system programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <title>Muhmmad Saad Shabir</title>
        <meta name="description" content="My singular goal is to have a net-positive impact on the world. Focusing on network architecture, protocol analysis, and system programming." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        {/* No favicon for tab icon, matching original eddy.build */}
        {/* Open Graph and Twitter meta tags for SEO/social */}
        <meta property="og:title" content="Muhmmad Saad Shabir" />
        <meta property="og:description" content="My singular goal is to have a net-positive impact on the world. Focusing on network architecture, protocol analysis, and system programming." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Muhmmad Saad Shabir" />
        <meta name="twitter:description" content="My singular goal is to have a net-positive impact on the world. Focusing on network architecture, protocol analysis, and system programming." />
      </head>
      <body className="antialiased min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
