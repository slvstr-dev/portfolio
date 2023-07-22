const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  images: {
    domains: [],
  },
  experimental: {
    typedRoutes: true,
  },
});
