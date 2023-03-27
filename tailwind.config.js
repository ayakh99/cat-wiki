/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: "1.125rem",
        13: "3.75rem",
        25: "6.25rem",
      },
      borderRadius: {
        "6xl": "2.652rem",
      },
      colors: {
        "primary-50": "#E0E0E0",
        "primary-100": " #E3E1DC",
        "primary-200": "#979797",
        "primary-400": "#544439",
        "primary-500": "#4D270C",
        "primary-600": "#291507",
        "secondary-300": "#DEC68B",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("prettier-plugin-tailwindcss"),
  ],
};
