/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      tchig: ["Tchig Mono", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#292A2D",
          200: "#202124",
        },
        secondary: {
          100: "#80809D",
          200: "#6541F5",
          300: "#656EE7",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
  variants: {
    scrollbar: ["rounded", "active", "disabled"],
  },
};
