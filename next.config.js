/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ["image.tmdb.org", "links.papareact.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home/fetchTrending',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
