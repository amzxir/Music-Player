/* craco.config.js */
import path from "path";

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  },
};