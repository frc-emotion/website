/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.resolve.alias.canvas = false;
		
		return config;
		},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.team2658.org',
				port: '',
				search: '',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				search: '',
			}
		]
	},
	sassOptions: {
		includePaths: [require("path").join(__dirname, "styles")],
	},
};

module.exports = nextConfig;
