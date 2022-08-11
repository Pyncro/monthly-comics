/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480'
      md: '768px'
      lg: '976px'
      xl: '1440px'
    }
    extend: {
      colors: {
        Eerie Black: #222222,
        White: #FFFFFF,
        Lapis Lazuli: #1C5D99,
        Cadet Blue: #639FAB,
        Light Steel Blue: #BBCDE5,

      }
    },
  },
  plugins: [],
}
