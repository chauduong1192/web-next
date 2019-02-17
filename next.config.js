const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withTypescript = require('@zeit/next-typescript');
const { optional, withPlugins } = require('next-compose-plugins');
const path = require('path');

const publicRuntimeConfig = {
  name: 'base',
  description: 'Base Web App Project',
  keywords: 'react.js, next.js',
  themeColor: '#ffffff',
  backgroundColor: '#ffffff',
  // gtmCode: ''
};

const toNextPlugin = (plugin, optKey) => (nextConfig = {}) => ({
  ...nextConfig,
  ...{
    // define in which phases this plugin should get applied.
    // you can also use multiple phases or negate them.
    // however, users can still overwrite them in their configuration if they really want to.
    phases: [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],

    webpack(config, options) {
      if (!options.isServer) {
        config.plugins.push(new plugin(optKey ? nextConfig[optKey] : nextConfig));
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  },
});

//see https://webpack.js.org/guides/progressive-web-application/
//and see https://developers.google.com/web/tools/workbox/
const withOffline = [
  optional(() => require('next-offline')),
  {
    workboxOpts: {
      swDest: 'static/service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: ['robots.txt'],
      runtimeCaching: [{
        // urlPattern: /(?!.*translations)\/(vn|en)+(\/(categories|subcategories|sales|products|auth|account).*)?/,
        urlPattern: /\//,
        handler: 'networkFirst',
        options: {
          cacheName: 'html-cache',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }, {
        urlPattern: /\.(?:json)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'json-cache',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }, {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }, {
        urlPattern: /\.(?:css)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'global-styles-cache',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }, {
        //   urlPattern: /api/,
        //   handler: 'staleWhileRevalidate',
        //   options: {
        //     cacheName: 'api-cache',
        //     expiration: {
        //       maxAgeSeconds: 60 * 5,
        //     },
        //     cacheableResponse: {
        //       statuses: [0, 200],
        //     },
        // }, {
        urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'fonts-cache',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }, ],
    },
  },
  [PHASE_PRODUCTION_BUILD],
];
const withPwaManifest = [
  optional(() => toNextPlugin(require('webpack-pwa-manifest'), 'pwaManifestOps')),
  {
    pwaManifestOps: {
      filename: 'static/manifest.json',
      inject: false,
      fingerprints: false,
      includeDirectory: true,
      publicPath: '/_next',
      name: publicRuntimeConfig.name,
      short_name: publicRuntimeConfig.name,
      description: publicRuntimeConfig.description,
      background_color: publicRuntimeConfig.backgroundColor,
      theme_color: publicRuntimeConfig.themeColor,
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/?utm_source=homescreen',
      icons: [{
          src: path.resolve('./static/icons/icon.png'),
          sizes: [57, 60, 72, 76, 114, 120, 144, 152, 180],
          type: 'image/png',
          destination: 'static/icons',
          ios: true
        },
        {
          src: path.resolve('./static/icons/icon.png'),
          size: 1024,
          type: 'image/png',
          destination: 'static/icons',
          ios: 'startup'
        },
        {
          src: path.resolve('./static/icons/icon.png'),
          sizes: [16, 32, 129, 192, 194, 512],
          type: 'image/png',
          destination: 'static/icons'
        },
      ],
    },
  },
  [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
];
const withBundleAnalyzer = [
  optional(() => require('@zeit/next-bundle-analyzer')),
  {
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: './bundles/client.html',
      },
    },
  },
];
const withCopy = [
  optional(() => toNextPlugin(require('copy-webpack-plugin'), 'copyOpts')),
  {
    copyOpts: [{
      from: './static/**/*',
      to: './'
    }, ],
  },
  [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
];

// compose next plugins and config
const nextPlugins = [
  withTypescript,
  withBundleAnalyzer,
  withOffline,
  withPwaManifest,
  withCopy
];

const nextConfig = {
  publicRuntimeConfig,
  webpack(config) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
module.exports = withPlugins(nextPlugins, nextConfig);
