import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        
  trailingSlash: true,
  reactStrictMode: true,
  basePath: "/enagram-test",     
  assetPrefix: "/enagram-test/",  
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
