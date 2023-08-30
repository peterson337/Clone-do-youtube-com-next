/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.gstatic.com'],
      },

      env: {
        YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
      },
}

module.exports = nextConfig
