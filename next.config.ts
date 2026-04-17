import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" } : {}),
  images: {
    unoptimized: !!isGithubActions,
  },
};

export default nextConfig;
