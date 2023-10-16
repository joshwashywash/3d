const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			yellow: colors.yellow[400],
			blue: colors.blue[900]
		},
		container: {
			center: true,
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {}
	},
	plugins: []
};
