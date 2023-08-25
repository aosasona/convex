/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#242830",
        "background-secondary": "#343a46",
        accent: "#343a46",
        convex: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d6dae1",
          300: "#b1bbc8",
          400: "#8796a9",
          500: "#68798f",
          600: "#536176",
          700: "#444f60",
          800: "#3b4351",
          900: "#343a46",
          950: "#242830",
        },
      },
    },
  },
  plugins: [],
};
