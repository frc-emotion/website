/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"teamYellow-100": "#fcfaca",
				"teamYellow-200": "#fcf797",
				"teamYellow-300": "#fcf465",
				"teamYellow-400": "#fcf232",
				"teamYellow-500": "#fcf000",
				"teamYellow-550": "#d9ce00",
				"teamYellow-600": "#bfb600",
				"teamYellow-700": "#8c8500",
				"teamYellow-800": "#595500",
				"teamYellow-900": "#262400",
				midnight: "#050226",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
