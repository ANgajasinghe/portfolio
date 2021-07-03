const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = {
  reactStrictMode: true,
  withPlugins: () => [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
  ],
};
