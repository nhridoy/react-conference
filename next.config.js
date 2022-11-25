/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // need it false for react-beautiful-dnd to work on ssr
  images: {
    domains: ["api.react-finland.fi"],
  },
};

module.exports = nextConfig;
