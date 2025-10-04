/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Modern browser support only
  swcMinify: true,
};

export default nextConfig;
