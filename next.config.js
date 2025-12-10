/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image Optimization
  images: {
    domains: [
      "www.sentosajayamandiri.com",
      "images.unsplash.com", // ✅ TAMBAH INI
    ],
    formats: ["image/webp", "image/avif"], // ✅ Tambah AVIF juga
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // ✅ Optimize sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // ✅ Thumbnail sizes
  },

  // Compression
  compress: true,

  // Headers for SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },

  // Redirects (301)
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
