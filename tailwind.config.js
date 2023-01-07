const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        gray: colors.neutral,
        // Primary - Sirocco
        primary: {
          '50': '#f6f7f7',
          '100': '#e0e7e6',
          '200': '#c1cecd',
          '300': '#9aaeae',
          '400': '#6d8383',
          '500': '#5b7071',
          '600': '#475a5a',
          '700': '#3b494a',
          '800': '#323d3d',
          '900': '#2c3535',
        },
        // Secondary - Hampton
        secondary: {
          '50': '#fbf7f1',
          '100': '#f5eddf',
          '200': '#e4cdad',
          '300': '#dcbc95',
          '400': '#cd9c6a',
          '500': '#c2824d',
          '600': '#b46e42',
          '700': '#965738',
          '800': '#794733',
          '900': '#623c2c',
        },

      }),
      fontFamily: {
        sans: ['Commissioner', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
