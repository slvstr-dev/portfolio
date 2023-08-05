const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  images: {
    domains: ['placehold.co'],
  },
  experimental: {
    typedRoutes: true,
  },
});
