/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      logo: ['"Caveat", cursive'],
    },
    colors: {
      "custom-dark-blue": "#000a12",
      "custom-blue": "#1a76f8",
      "custom-light-blue": "#99c2fc",
      "custom-red": "#ff1a1a",
      "custom-yellow": "#f8cf45",
      "custom-white": "#fff",
      "custom-black": "#000",
    },
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
