import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["@prisma/client", "pg"],
  turbopack: {
    resolveAlias: {
      "@prisma/client": "./app/generated/prisma"
    }
  }
};

export default nextConfig;
