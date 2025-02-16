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
    // 재귀적으로 모든 규칙을 순회하는 함수
    const updateCssLoader = (rules) => {
      rules.forEach((rule) => {
        if (rule.use) {
          const loaders = Array.isArray(rule.use) ? rule.use : [rule.use];
          loaders.forEach((loader) => {
            if (loader.options && loader.options.modules) {
              // pure 모드를 비활성화합니다.
              loader.options.modules.pure = false;
            }
          });
        }
        if (rule.oneOf) {
          updateCssLoader(rule.oneOf);
        }
      });
    };

    updateCssLoader(config.module.rules);
    return config;
  },
};

export default nextConfig;
