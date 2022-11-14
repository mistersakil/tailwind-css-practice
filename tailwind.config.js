/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "red",
          200: "blue",
        },
      },
    },
  },
  plugins: [],
};
