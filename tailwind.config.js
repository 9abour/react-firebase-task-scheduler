/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					ceruleanBlue: "#3652AD",
					lavenderBlue: "#7D93E8",
					periwinkleBlue: "#89A2FF",
					hawkesBlue: "#D8DCFD",
					saffronMango: "#FFBF5E",
					success: "#0BD9A8",
				},
				dark: {
					jungleGreen: "#1D1D24",
					balticSea: "#26262F",
					gunmetal: "#31313C",
					gunPowder: "#454555",
				},
				grey: {
					monsoon: "#82828D",
					chateau: "#A9A9B1",
					iron: "#D0D4DA",
					ghostWhite: "#F9F8FF",
				},
				priority: {
					high: "#ffd013",
					medium: "#4da1ff",
					low: "#a1d76a",
				},
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			boxShadow: {
				popup: `0px 18px 25px -10px rgb(0 0 0);`,
				card: `0px 0px 16px rgba(17, 17, 26, 0.2), 0px 0px 1px rgba(17, 17, 26, 0.5);`,
				borderPopup: `0px 0px 0px 1px inset`,
				button: `0px 3px 6px 1px rgb(0 0 0);`,
			},
			fontSize: {
				h1: "2.5rem",
				h2: "2rem",
				h3: "1.75rem",
				h4: "1.5rem",
				h5: "1.25rem",
				h6: "1rem",
				body1: "16px",
				body2: "14px",
			},
		},
	},
	plugins: [],
};
