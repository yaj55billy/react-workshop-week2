/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "991px",
			xl: "1280px",
		},
		extend: {
			colors: {
				primary: "#988574",
				brown: {
					100: "#ede9e5",
					light: "#a4927c",
					DEFAULT: "#655746",
					dark: "#4e4336",
				},
			},
		},
	},
	plugins: [],
};
