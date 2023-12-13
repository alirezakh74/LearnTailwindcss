/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['vazir', 'sans-serif'],
      display: ['vazir', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    },
  },
  plugins: [],
}

