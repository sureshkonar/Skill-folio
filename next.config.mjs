/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repository.endsWith(".github.io");
const pagesBasePath = repository && !isUserSite ? `/${repository}` : "";

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: pagesBasePath,
    assetPrefix: pagesBasePath,
};

export default nextConfig;
