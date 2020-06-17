const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('../'),
  ];
  config.resolve.alias = {
    "@app": path.resolve(__dirname, '../'),
    "@components": path.resolve(__dirname, '../components/'),
    "@utils": path.resolve(__dirname, '../utils/'),
    "@redux": path.resolve(__dirname, '../redux/'),
    "@pages": path.resolve(__dirname, '../pages/'),
    "@public": path.resolve(__dirname, '../public/'),
    "@api": path.resolve(__dirname, '../api/'),
    "@i18nnext": path.resolve(__dirname, '../i18nnext.ts'),
    "@stories": path.resolve(__dirname, '../stories/'),
  }
  return config;
};