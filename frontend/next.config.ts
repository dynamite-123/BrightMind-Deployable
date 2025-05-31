import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even with
    // ESLint errors. Remove this after fixing all ESLint issues.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
