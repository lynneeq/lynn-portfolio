import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
    // allow local avif files in public/
    unoptimized: false,
  },
};

export default nextConfig;
