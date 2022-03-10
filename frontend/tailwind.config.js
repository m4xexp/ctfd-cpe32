module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0527",
        secondary: "#1a2332",
        themeBlue: "#0062B9",
      },
      opacity: {
        35: ".35",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
