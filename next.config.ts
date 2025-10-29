import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable compression
  compress: true,
  webpack: (config, { dev }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: './analyze/client.html',
        })
      );
    }

    // Reduce unnecessary polyfills for modern browsers
    if (!dev && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Skip core-js polyfills that are not needed for modern browsers
        'core-js': false,
      };
    }

    return config;
  },
};

export default nextConfig;
