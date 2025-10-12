/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Modern browser support only
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Optimize package imports for better performance
  experimental: {
    optimizePackageImports: ['geist'],
    optimizeCss: true,
  },
};

export default nextConfig;
