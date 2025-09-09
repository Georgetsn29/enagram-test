import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // enable static export
  trailingSlash: true,
  reactStrictMode: true,
  basePath: "/enagram-test",      // your GitHub repo name
  assetPrefix: "/enagram-test/",  // ensures CSS/JS load correctly
  images: {
    unoptimized: true,            // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
