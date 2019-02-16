const withTypescript = require('@zeit/next-typescript');
const withPlugins = require('next-compose-plugins');

// compose next plugins and config
const nextPlugins = [
  withTypescript,
];

const nextConfig = {
  // publicRuntimeConfig,
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
module.exports = withPlugins(nextPlugins, nextConfig);
