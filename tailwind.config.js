module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'light-red': "#FFE0E0",
          'light-green': "#E5FFFA",
          'light-yellow': "#FFE8AC",
          'accent-red': "#FF9999",
          'accent-green': "#97EFE0",
          'accent-yellow': "#FFC01F",
        },
      },
    },
  },
  plugins: [],
}