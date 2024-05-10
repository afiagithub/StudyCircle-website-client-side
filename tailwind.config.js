/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rale: ['"Raleway"', "sans-serif"],
        sans: ['"Josefin Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

