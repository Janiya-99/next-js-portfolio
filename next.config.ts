/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-js-portfolio',     // repo name -> adjust if different
  assetPrefix: '/next-js-portfolio/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
