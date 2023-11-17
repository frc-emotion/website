/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.team2658.org"],
    },
    sassOptions: {
        includePaths: [require("path").join(__dirname, "styles")],
    },
};

module.exports = nextConfig;
