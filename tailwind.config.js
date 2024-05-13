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
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#5D3FD3",
          secondary: "#36454F",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#874CCC",
          secondary: "#D3D3D3",
        },
      },
    ],
  },
}

