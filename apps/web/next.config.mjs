/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  env: {
    API_APP_URL: process.env.API_APP_URL,
    WEB_APP_URL: process.env.WEB_APP_URL,
  },
};

export default nextConfig;
