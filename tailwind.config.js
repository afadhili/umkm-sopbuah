/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			backgroundColor: {
				primary: "#C04CFD",
				secondary: "#FC6DAB",
				base: "#F8F8FF",
				secbase: "#F7F6C5",
			},
			colors: {
				primary: "#C04CFD",
				secondary: "#FC6DAB",
				base: "#F8F8FF",
			},
			backgroundImage: {},
		},
	},
	plugins: [],
};
