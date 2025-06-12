/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['"Rubik Distressed"', "cursive"],
				gothic: ['"Special Gothic Expanded One"', "sans-serif"],
			},
			colors: {
				"background-color-header": "#f0e7db",
			},
		},
	},
	plugins: [],
};
