const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/img/hero-img.png')",
      },
    },
  },
  plugins: [],
});
