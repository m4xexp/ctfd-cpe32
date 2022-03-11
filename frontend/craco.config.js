module.exports = {
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
