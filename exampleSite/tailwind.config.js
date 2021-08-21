const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              mono: ["'Courier Prime'", ...defaultTheme.fontFamily.mono],
              sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans]
          }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
