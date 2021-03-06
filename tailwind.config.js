const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      bruh: ["Lobster", "cursive"],
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    screens: {
      xm: "475px",
      xs: "320px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
