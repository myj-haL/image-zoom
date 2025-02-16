/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production"
  ? "https://myj-hal.github.io/image-zoom/"
  : "",
  webpack(config) {
    // css-loader의 CSS Modules 옵션에서 pure 모드를 비활성화
    config.module.rules
      .filter((rule) => Array.isArray(rule.oneOf))
      .flatMap((rule) => rule.oneOf)
      .forEach((one) => {
        one.use?.forEach((loader) => {
          if (
            loader.loader?.includes("css-loader") &&
            loader.options?.modules
          ) {
            loader.options.modules.pure = false;
          }
        });
      });
    return config;
  },
};

export default nextConfig;
