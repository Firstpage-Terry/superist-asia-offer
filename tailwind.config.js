/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'blue-main': '#1057FF',
        'black': '#000000',
        'black-bg': '#17121A',
        'white': '#ffffff',
        'white-peral': '#FAFCFE',
        'gray-text': '#4a4a68', // 'gray-text': '#667085',
        'gray-light': '#D1D5DC', //'gray-light': '#8C8CA1',
        'gray-highlight': '#f1f1f1',
        'cloud-gray': '#f3f4fa',
        'dark-gray':   '#333333',
        'green':		'#25af60',
        'cta-red':   '#ED2939',
      },
      screens: {
				sm: '768px',
				md: '998px',
				lg: '1280px',
				xl: '1440px',
				// '2xl': '1400px',
			  },
    },
  },
  plugins: [],
};