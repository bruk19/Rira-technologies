/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
   webpack: (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== "MiniCssExtractPlugin"
    );
    return config;
  },
}

export default nextConfig
