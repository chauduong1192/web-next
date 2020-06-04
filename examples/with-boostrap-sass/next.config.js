const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const configureGlobalSCSSEntries = (config, {
  isServer,
  dev
}) => {
  const oldEntry = config.entry;

  config.entry = () => {
    return oldEntry().then((entry) => {
      entry['global.css'] = ['./pages/styles/global.scss'];
      return entry;
    });
  }

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: !dev,
          sourceMap: dev,
          importLoaders: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      },
    ],
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "public/styles/[name]"
    })
  );


};

module.exports = {
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders,
    webpack
  }) => {
    configureGlobalSCSSEntries(config, {
       dev,
       isServer
     });

    return config;
  }
}