module.exports = {
  webpack5: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
