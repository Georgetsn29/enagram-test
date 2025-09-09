/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: '/enagram-test',
        assetPrefix: '/enagram-test/',
      }
    : {}),
};

module.exports = nextConfig;
