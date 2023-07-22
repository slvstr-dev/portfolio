/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
