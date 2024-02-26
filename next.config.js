/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};