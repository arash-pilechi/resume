const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const isDev = process.env.NODE_ENV === "development";
const path = require('path')
const { i18n } = require('./next-i18next.config');
const runtimeCaching = require("next-pwa/cache");

const plugins = [
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === "development",
          register: true,
          scope: "/app",
          sw: "service-worker.js",
          //...
        },
      },
    ],
  ];
const nextConfig = {
  future: {
    webpack5: true
  },
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: isDev,
  }
};
module.exports = withPlugins(plugins, nextConfig);
