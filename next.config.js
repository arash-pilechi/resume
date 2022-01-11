const path = require('path');
const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require("next-compose-plugins");
const isProd = process.env.NODE_ENV === "production";

const plugins = [
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
    },
  ]
];
const nextConfig = {
  i18n,
  swcMinify: isProd,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
};
module.exports = withPlugins(plugins, nextConfig);
