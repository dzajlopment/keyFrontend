/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/tw-elements-react/dist/js/**/*.js",
	],
	theme: {
		extend: {
			animation: {
				zoomIn: "zoomIn 0.1s ease",
			},
			backgroundImage: {
				"grid-slate-100": `url(
					"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"
				)`,
			},
			keyframes: {
				zoomIn: {
					"0%": {
						transform: "scale(0.8)",
						opacity: 0.5,
					},
					"100%": {
						transform: "scale(1)",
						opacity: 1,
					},
				},
			},
			container: {
				center: true,
			},
		},
	},

	// eslint-disable-next-line no-undef
	plugins: [require("tw-elements-react/dist/plugin.cjs")],
	darkMode: "class",
};
