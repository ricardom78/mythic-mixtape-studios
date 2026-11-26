import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/channel-logo.png",
        destination: "/api/channel-logo",
      },
      {
        source: "/games/:slug.jpg",
        destination: "/api/game-art/:slug",
      },
    ];
  },
};

export default nextConfig;
