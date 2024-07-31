const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  webpack: (config) => {
    // 아래를 추가합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:first/:second",
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:first/:second`,
      },
    ];
  },
});
