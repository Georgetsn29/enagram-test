import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // enable static export
  trailingSlash: true,
  basePath: "/enagram-test",
  reactStrictMode: true, 
  assetPrefix: '/enagram-test/',
    images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },  // adds a trailing slash for GitHub Pages
  // other config options if needed
};

module.exports = {
  output: 'export',
  basePath: '/enagram-test',
  assetPrefix: '/enagram-test/',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
