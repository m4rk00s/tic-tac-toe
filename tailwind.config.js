module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Outfit", "sans-serif"]
    },
    extend: {
      colors: {
        "light-blue": "#31C3BD",
        "light-blue-hover": "#65E9E4",
        "light-yellow": "#F2B137",
        "light-yellow-hover": "#FFC860",
        "dark-navy": "#1A2A33",
        "semi-dark-navy": "#1F3641",
        "silver": "#A8BFC9",
        "silver-hover": "#DBE8ED"
      },
      boxShadow: {
        'button-sm': "inset 0px -4px 0px #10212A",
        'button': "inset 0px -8px 0px #10212A",
      },
      gridTemplateColumns: {
        'tic-tac-toe': "repeat(3, minmax(96px, 1fr))"
      }
    },
  },
  plugins: [],
}
