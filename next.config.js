/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [require("path").join(__dirname, "styles")],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
