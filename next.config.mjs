/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Izinkan semua hostname
          pathname: '**', // Izinkan semua path
        }
      ]
    }
  };

export default nextConfig;
