import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			typography: {
				DEFAULT: {
					css: {
						color: "var(--ctp-text)",
						a: {
							color: "var(--ctp-blue)",
							"&:hover": {
								color: "var(--ctp-lavender)",
							},
						},
						h1: {
							color: "var(--ctp-mauve)",
						},
						h2: {
							color: "var(--ctp-mauve)",
						},
						h3: {
							color: "var(--ctp-mauve)",
						},
						code: {
							color: "var(--ctp-peach)",
							backgroundColor: "var(--ctp-surface0)",
							padding: "0.2em 0.4em",
							borderRadius: "0.25rem",
						},
						pre: {
							backgroundColor: "var(--ctp-surface0)",
						},
					},
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
