/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        caption: "#2D322B",
        secCaption: "#A5E07C",
        bg1: "#F2FCF0",
        bg2: "#AED394",
      },
      fontFamily: {
        ssp: "Source Serif Pro",
      },
    },
  },
  plugins: [],
};
