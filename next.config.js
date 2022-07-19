/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  webpack: (config, { isServer }) => {
    // Done on build
    if (isServer) {
      require("./lib/generate-sitemap");
    }

    return config;
  },
};
