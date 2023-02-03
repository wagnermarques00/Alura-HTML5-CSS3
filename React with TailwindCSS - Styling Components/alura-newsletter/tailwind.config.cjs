/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					100: "rgb(18, 18, 18)",
					200: "rgb(51, 51, 51)",
				},
				alura: {
					100: "#167bf7",
					200: "#051933",
				},
			},
		},
	},
	plugins: [],
};
