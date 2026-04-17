import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  repo = "/utkarsh-portfolio";
}

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export", basePath: repo, assetPrefix: repo } : {}),
  images: {
    unoptimized: !!isGithubActions,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
};

export default nextConfig;
