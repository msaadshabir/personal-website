/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Modern browser support only - skip polyfills for baseline features
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Optimize CSS
  experimental: {
    optimizeCss: true,
  },
  // Configure webpack optimization to reduce polyfill bundle size
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      // Ignore unnecessary polyfills for modern browsers
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /core-js\/modules\/es\.(array\.at|array\.flat|array\.flat-map|object\.from-entries|object\.has-own|string\.trim-end|string\.trim-start)/,
        })
      );

      // Optimize chunk splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            // Separate framework from polyfills
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
