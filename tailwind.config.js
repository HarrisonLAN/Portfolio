module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#F5F5F5',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
