/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      mont: ["Montserrat", "serif"],
      cond: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-light": "#eceff1",
        light: "#767677",
        red: "rgb(227 43 43)",
      },
    },
  },
  plugins: [],
};
