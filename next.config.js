/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://146.190.88.113:8080/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
