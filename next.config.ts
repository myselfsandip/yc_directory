import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // Remove experimental flags as they cause errors in stable Next.js
  // experimental: {},

  devIndicators: {
    position: "bottom-right",
  },
};

export default withSentryConfig(nextConfig, {
  org: "js-mastery-dk",
  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  reactComponentAnnotation: {
    enabled: true,
  },

  // tunnelRoute: "/monitoring",

  hideSourceMaps: true,

  disableLogger: true,

  automaticVercelMonitors: true,
});
