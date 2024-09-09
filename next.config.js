/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		
		 return config;
		},
	reactStrictMode: true,
	images: {
		domains: ["cdn.team2658.org"],
	},
	sassOptions: {
		includePaths: [require("path").join(__dirname, "styles")],
	},
	experimental: {
		turbo: {
			resolveAlias: {
				canvas: './empty-module.ts'
			}
		}
	}
};

module.exports = nextConfig;
