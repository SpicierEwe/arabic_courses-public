module.exports = {
  webpack5: true,
  images
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
