/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1200px",
          "2xl": "1200px",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#2F6B4F",
          200: "#2A2C3D",
        },
        secondary: {
          100: "#FFFFFF",
          200: "#D9D9D9",
          300: "#F9F9F9",
        },
      },
    },
  },
  plugins: [],
};
