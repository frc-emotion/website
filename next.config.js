/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		
		 return config;
		},
	reactStrictMode: true,
	images: {
		domains: ["cdn.team2658.org", "cdn.jsdelivr.net"],
	},
	sassOptions: {
		includePaths: [require("path").join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
