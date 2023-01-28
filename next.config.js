/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
 module.exports = {
   reactStrictMode: true,
     // Use the CDN in production and localhost for development.
     // assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
 };
