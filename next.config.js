/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  features: {
    serverComponents: true,
    serverComponentsMiddleware: true,
  },
};

module.exports = nextConfig;
