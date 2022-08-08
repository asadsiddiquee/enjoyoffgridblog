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
  images: {
    domains: ["res.cloudinary.com"],
  },

  async redirects() {
    return [
      {
        source: "/[slug]",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
