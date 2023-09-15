const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  images: {
    domains: [
      'placehold.co',
      'opengraph.githubassets.com',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },
  experimental: {
    typedRoutes: true,
  },
});
