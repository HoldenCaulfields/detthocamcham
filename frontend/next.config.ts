import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    serverActions: {
        bodySizeLimit: '10mb', // Increase body size limit for server actions
    },
},
};

export default nextConfig;
