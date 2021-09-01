const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#161616',
      'navItem': '#c0a062',
    }),
    extend: {
      spacing: {
        '96': '55rem',
      },
      lineHeight: {
        'extra-loose': '3.5rem',
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
      white: colors.white,
      navText: '#161616',
      default: '#999',
      mobileNav: '#eee',
      borderColour: '#0d0d0d'
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
