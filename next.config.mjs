/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Next.js 16 uses Turbopack by default
  turbopack: {},
  // Optimize CSS
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
