import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // enable static export
  trailingSlash: true,
  basePath: "/enagram-test",
  reactStrictMode: true,     // adds a trailing slash for GitHub Pages
  // other config options if needed
};

export default nextConfig;
