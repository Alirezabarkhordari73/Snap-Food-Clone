/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    fontSize: {
      larg: "1.5rem",
      medium: "1.3rem",
      small: "0.85rem",
      verysmall: "0.8rem",
      supersmall: "0.7rem",
    },
    borderRadius: {
      medium: "10px",
      small: "5px",
      full: "50%",
    },
  },
  plugins: [],
};
