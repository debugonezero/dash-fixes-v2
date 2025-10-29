import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@stripe/stripe-js'],
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    // Enable ESLint in production builds for Cloudflare
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Enable TypeScript checking in production builds for Cloudflare
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
