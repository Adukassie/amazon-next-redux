/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     domains: ["links.papareact.com",
         "fakestoreapi.com"]
    // remotePatterns: [
    //   {
    //     // protocol: "https",
    //     hostname: "links.papareact.com",
    
    //   },
    // ],
  },
};

module.exports = nextConfig;
