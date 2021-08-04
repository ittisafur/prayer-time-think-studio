module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "bismillah-blue-950": "#142355",
        "bismisllah-blue-250": "#5A6588",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
