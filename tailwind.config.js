/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-light": "#eceff1",
      black: "#000000",
      white: "#ffffff",
      light: "#767677",
      red: "rgb(227 43 43)",
      gray: "#8492a6",
      "black-700": "#000000db",
      "black-500": "#000000ba",
      "black-300": "#0000008f",
      "black-100": "#0000001a",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mont: ["Montserrat", "serif"],
      cond: ["Roboto Condensed", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
