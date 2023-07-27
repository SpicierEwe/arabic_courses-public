// If you use fs, be sure it's only within getInitialProps or getServerSideProps. (anything includes server-side rendering).

// You may also need to create a next.config.js file with the following content to get the client bundle to build:

// For webpack4

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
