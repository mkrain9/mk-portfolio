const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        ...defaultTheme.screens,
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
      },
      keyframes: {},
    },
    plugins: [],
  },
}
