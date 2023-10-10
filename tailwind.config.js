/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				zoomIn: "zoomIn 0.1s ease",
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
	plugins: [],
};
