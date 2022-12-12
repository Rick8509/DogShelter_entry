/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        'primary': "#FF5E0E",
      },
    },
  },
  plugins: [],
};
