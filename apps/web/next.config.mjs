/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  env: {
    PRODUCTION: process.env.PRODUCTION,
    API_APP_URL: process.env.API_APP_URL,
    WEB_APP_URL: process.env.WEB_APP_URL,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/l/:token",
        destination: `${process.env.API_APP_URL}/api/customer/links/:token/track`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
