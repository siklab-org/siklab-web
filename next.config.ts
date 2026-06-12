import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aiforasean.org",
      },
      {
        protocol: "https",
        hostname: "dev.app.enactus.ph",
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
