import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/offres",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
