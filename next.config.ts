import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/next-js-portfolio",
  assetPrefix: "/next-js-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
