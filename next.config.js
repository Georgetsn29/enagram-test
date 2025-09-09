/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export
  basePath: '/enagram-test',
  assetPrefix: '/enagram-test/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
