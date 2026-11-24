import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // All pages carry noindex via metadata — keep off during development
  // Switch to output: 'export' for a fully static deployment without the API route
  images: {
    // Allow Google favicon service used for brand logos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
    ],
  },
};

export default nextConfig;
