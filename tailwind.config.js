module.exports = {
  purge: {
    node: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'spoGreen': '#1DB954',
        'spoBlack': '#191414',
        'dark': '#121212',
        'light': '#282828',
        'lightess': '#B3B3B3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
