import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@stripe/stripe-js', 'lucide-react'],
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
        stripe: {
          test: /[\\/]node_modules[\\/]@stripe[\\/]/,
          name: 'stripe-vendor',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        lucide: {
          test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
          name: 'lucide-vendor',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
          name: 'framework',
          chunks: 'all',
          priority: 30,
          enforce: true,
        },
        tailwind: {
          test: /[\\/]node_modules[\\/]tailwindcss[\\/]/,
          name: 'tailwind-vendor',
          chunks: 'all',
          priority: 15,
          enforce: true,
        },
      },
    };
    return config;
  },
};

export default nextConfig;
