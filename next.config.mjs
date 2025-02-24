/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pimage-zoom',
  assetPrefix: '/pimage-zoom/',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/image-zoom" : "",
};

export default nextConfig;
