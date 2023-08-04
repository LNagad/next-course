/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {hostname: "rickandmortyapi.com"},
         {hostname: "i.pinimg.com"}
      ]
   }
};

export default nextConfig;
