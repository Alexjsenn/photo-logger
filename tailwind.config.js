module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
      },
      colors: {
        'gray-light': '#ECECEC',
        'hunter-green': '#3F704D',
        'primary': '#3f5165',
        'primaryLight': '#757de8'
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};