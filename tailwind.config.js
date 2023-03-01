/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#FFF",
        primary: "#EA5C26",
      },

      fontFamily: {
        assistant: ["Assistant"],
      },
    },
    screens: {
      desktop: { min: "1218px" },
      tablet: { max: "1217px", min: "768px" },
      mobile: { max: "767px" },
    },
    zIndex: {
      max: "9999",
      50: 50,
    },
  },
  plugins: [],
};
