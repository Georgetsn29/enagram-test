/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/enagram-test',      // repo name for GitHub Pages
  assetPrefix: '/enagram-test/',  // ensures CSS & JS load correctly
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true, // disable Next.js image optimization for GitHub Pages
  },
};

module.exports = nextConfig;
