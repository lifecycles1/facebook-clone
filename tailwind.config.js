module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", //set up copied from tailwind css documentation website
    "./components/**/*.{js,ts,jsx,tsx}", //set up copied from tailwind css documentation website
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
