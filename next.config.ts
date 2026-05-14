import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/sunflower',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/sunflower',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;