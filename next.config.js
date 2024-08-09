const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
          {
            protocol: 'https',
            hostname: 'netlify-eleventy-api-img.netlify.app',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'img-c.udemycdn.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'wallpapercave.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'say-hi.me',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 't4.ftcdn.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'nextui.org',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'joshuaavalon.io',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'mavs-wp-media-server.s3.ap-northeast-1.amazonaws.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = withMDX(nextConfig)
