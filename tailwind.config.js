module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        dark: "#1D1D1D",
        light: "#3B3B3A",
      },
      white: "#F8E2BD",
      yellow: "#F9AB00",
      red: "#E94D4D",
      blue: "#2B81AC",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
