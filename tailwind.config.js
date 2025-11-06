// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'club-red': '#e53e3e',
        'club-black': '#1a202c',
        'club-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Make sure this line is exactly 'tailwindcss-rtl'
    require('tailwindcss-rtl'),
  ],
  rtl: true,
}