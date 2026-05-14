import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/sunflower', 
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;