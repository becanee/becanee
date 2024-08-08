/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'becanee.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
