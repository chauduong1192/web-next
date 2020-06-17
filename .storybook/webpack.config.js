const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, "../"),
    // path.resolve(__dirname, "../components")
  ];

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};