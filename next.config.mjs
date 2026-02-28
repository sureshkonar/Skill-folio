/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure the basePath matches your repository name for GitHub Pages
    basePath: '/Skill-folio',
    assetPrefix: '/Skill-folio',
};

export default nextConfig;
