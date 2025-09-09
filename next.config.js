/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/enagram-test',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
