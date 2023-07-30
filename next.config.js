/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com","images.unsplash.com"],
  },  // previous command here
  experimental: {
    outputStandalone: true,
  },   
}
;

module.exports = nextConfig;
