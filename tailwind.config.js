/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': {'min': '0px', 'max': '1313px'},
    }
  },
  plugins: [],
}

