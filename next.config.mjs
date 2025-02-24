/** @type {import('next').NextConfig} */
const nextConfig = {
  // 개발 환경에서는 output 생략, 배포 시 'export' 적용
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/image-zoom" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/image-zoom/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;