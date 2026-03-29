import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Converts SVG imports into React components
   turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Allow external images from WordPress
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.nabinmagar.com',
      },
    ],
  },
};

export default nextConfig;
