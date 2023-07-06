/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['cdn.team2658.org']
	},
};

module.exports = nextConfig;
