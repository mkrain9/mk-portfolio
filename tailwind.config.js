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
      boxShadow: {
        neumorphic:
          '5px 5px 7px  rgba(0, 0, 0, 0.25), -5px -5px 7px rgba(255, 255, 255, 0.43)',
        innerNeumorphic:
          'inset 5px 5px 7px  rgba(0, 0, 0, 0.09), inset -5px -5px 7px rgba(255, 255, 255, 0.43)',
      },
      colors: {
        blueGrey: '#dde4ec',
        blueSteel: '#8898b4',
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
