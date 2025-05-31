/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f8d0d9',
          300: '#f2aabf',
          400: '#e9799e',
          500: '#db537f',
          600: '#c42f60',
          700: '#a42450',
          800: '#882244',
          900: '#7D2E46',
        },
        gold: {
          50: '#fdfbec',
          100: '#fcf7d3',
          200: '#f8eda6',
          300: '#f4df73',
          400: '#eece3f',
          500: '#e1ba2a',
          600: '#C3A343',
          700: '#a2791c',
          800: '#85601e',
          900: '#724e1f',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};