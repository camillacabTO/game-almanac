/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com', 'media.rawg.io'],
  },
}

module.exports = nextConfig
