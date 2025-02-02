import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone'
};


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
}
export default nextConfig;
