/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2024",
        highlight: "#FACC15",
        highlightDark: "#c49d00",
      },
    },
  },
  plugins: [],
};
