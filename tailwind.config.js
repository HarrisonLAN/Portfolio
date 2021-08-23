const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F5F5F5',
    }),
    extend: {
      spacing: {
        '96': '50rem',
      }
    },
    fontFamily: {
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
    },
    colors: {
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
