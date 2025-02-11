import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'resume-portfolio-assets.s3.us-east-1.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  output: 'standalone'
};


export default nextConfig;
