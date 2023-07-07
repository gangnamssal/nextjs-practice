/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      //   {
      //     source: "/list/:id*",
      //     destination: "/abc/:id*",
      //     permanent: false,
      //   },
    ];
  },
  async rewrites() {
    return [
      //   {
      //     source: "/movie/get",
      //     destination: `http://요청URL/movie/get?api_key=${API}`,
      //   },
    ];
  },
};

module.exports = nextConfig;
