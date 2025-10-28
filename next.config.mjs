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
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression
  compress: true,
  // Power optimizations
  poweredByHeader: false,
};

export default nextConfig;
