const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  images: {
    domains: ['placehold.co', 'opengraph.githubassets.com', 'raw.githubusercontent.com'],
  },
  experimental: {
    typedRoutes: true,
  },
});
