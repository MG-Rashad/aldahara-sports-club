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
        'arabic': ['Cairo', 'sans-serif'],
      },
      // --- CHANGE: Override the default container to use logical padding ---
      container: {
        center: true,
        padding: '1.5rem', // This sets the default padding
        screens: {
          sm: '2rem',
        },
      },
    },
  },
  plugins: [],
}