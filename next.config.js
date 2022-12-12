/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //appdirの有効化！
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
