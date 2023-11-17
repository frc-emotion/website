/** @type {import('tailwindcss').Config} */
/* eslint-disable max-len */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        transparent: "transparent",
        current: "currentColor",
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
                // light mode
                tremor: {
                    brand: {
                        faint: "#eff6ff", // blue-50
                        muted: "#bfdbfe", // blue-200
                        subtle: "#60a5fa", // blue-400
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#1d4ed8", // blue-700
                        inverted: "#ffffff", // white
                    },
                    background: {
                        muted: "#f9fafb", // gray-50
                        subtle: "#f3f4f6", // gray-100
                        DEFAULT: "#ffffff", // white
                        emphasis: "#374151", // gray-700
                    },
                    border: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    ring: {
                        DEFAULT: "#e5e7eb", // gray-200
                    },
                    content: {
                        subtle: "#9ca3af", // gray-400
                        DEFAULT: "#6b7280", // gray-500
                        emphasis: "#374151", // gray-700
                        strong: "#111827", // gray-900
                        inverted: "#ffffff", // white
                    },
                },
                // dark mode
                "dark-tremor": {
                    brand: {
                        faint: "#0B1229", // custom
                        muted: "#172554", // blue-950
                        subtle: "#1e40af", // blue-800
                        DEFAULT: "#3b82f6", // blue-500
                        emphasis: "#60a5fa", // blue-400
                        inverted: "#030712", // gray-950
                    },
                    background: {
                        muted: "#131A2B", // custom
                        subtle: "#1f2937", // gray-800
                        DEFAULT: "#111827", // gray-900
                        emphasis: "#d1d5db", // gray-300
                    },
                    border: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    ring: {
                        DEFAULT: "#1f2937", // gray-800
                    },
                    content: {
                        subtle: "#4b5563", // gray-600
                        DEFAULT: "#6b7280", // gray-600
                        emphasis: "#e5e7eb", // gray-200
                        strong: "#f9fafb", // gray-50
                        inverted: "#000000", // black
                    },
                },
            },
            boxShadow: {
                // light
                "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "tremor-card":
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "tremor-dropdown":
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                // dark
                "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "dark-tremor-card":
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                "dark-tremor-dropdown":
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            },
            borderRadius: {
                "tremor-small": "0.375rem",
                "tremor-default": "0.5rem",
                "tremor-full": "9999px",
            },
            fontSize: {
                "tremor-label": ["0.75rem"],
                "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
                "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
                "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
                rxs: "clamp(0.75rem, 1vw + 0.05rem, 0.875rem)",
                rsm: "clamp(0.75rem, 1vw + 0.05rem, 1rem)",
                rmd: "clamp(1rem, 2vw + 0.05rem, 1.125rem)",
                rlg: "clamp(1rem, 2vw + 0.05rem, 1.25rem)",
                rxl: "clamp(1rem, 2vw + 0.25rem, 1.5rem)",
                r2xl: "clamp(1.5rem, 2vw + 0.25rem, 1.875rem)",
                r3xl: "clamp(1.5rem, 4vw + 0.6rem, 2.25rem)",
                r4xl: "clamp(1.5rem, 4vw + 0.6rem, 3rem)",
                r5xl: "clamp(2rem, 7vw + 1rem, 3.75rem)",
                r6xl: "clamp(2rem, 7.5vw + 1rem, 4.5rem)",
                r7xl: "clamp(2.6rem, 8vw + 1rem, 6rem)",
                r8xl: "clamp(2.6rem, 8.5vw + 1rem, 8rem)",
                r9xl: "clamp(2.6rem, 9vw + 1rem, 9rem)",
                r10xl: "clamp(2.5rem, 9.5vw + 1rem, 10rem)",
                r11xl: "clamp(2.5rem, 10vw + 1rem, 11rem)",
                r12xl: "clamp(2.5rem, 10.5vw + 1rem, 12rem)",
            },
            height: {
                clampLarge: "clamp(15rem, 30vh, 30rem)",
                clampXL: "clamp(25rem, 40vh, 40rem)",
            },
            screens: {
                "-2xl": { max: "1535px" }, // inverse 2xl
                "-xl": { max: "1279px" }, // inverse xl
                "-lg": { max: "1023px" }, // inverse lg
                hlg: { min: "896px" }, // half between lg and md
                "-hlg": { max: "895px" }, // inverse half between lg and md
                "-md": { max: "767px" }, // inverse md
                hmd: { min: "704px" }, // half between md and sm
                "-hmd": { max: "703px" }, // inverse half between md and sm
                "-sm": { max: "639px" }, // inverse sm
                "-xs": { max: "390px" }, // inverse xs
                "2xs": { min: "390px" }, // inverse 2xs
                "-2xs": { max: "330px" }, // inverse 2xs
                oxl: { min: "1280px", max: "1535px" }, // only xl
                olg: { min: "1024px", max: "1279px" }, // only lg
                omd: { min: "768px", max: "1023px" }, // only md
                osm: { min: "639px", max: "767px" }, // only sm
                oxs: { min: "390px", max: "639px" }, // only xs
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-main)"],
                "bebas-neue": ["var(--font-bebas-neue)"],
                inter: ["var(--font-inter)"],
            },
        },
    },
    safelist: [
        {
            pattern:
                /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            variants: ["hover", "ui-selected"],
        },
        {
            pattern:
                /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
        {
            pattern:
                /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        },
    ],
    plugins: [
        require("@headlessui/tailwindcss"),
        require("@tailwindcss/forms"),
    ],
};
