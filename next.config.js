const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = {
  env: {
    SUPABASE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTk4NzQ1NiwiZXhwIjoxOTQxNTYzNDU2fQ.l6UzVQLFhzvcsc22kFypIty7EGVI1j56GhgU-LAEHbc",
  },
  reactStrictMode: true,
  images: {
    domains: ["euuxswablrvfihzxbfml.supabase.co"],
  },

  withPlugins: () => [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
  ],
};
