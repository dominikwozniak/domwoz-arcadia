/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aether: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#ec4899',
        },
        // Story helper colors
        blue: '#3b82f6',
      },
      spacing: {
        'aether-sm': '0.5rem',
        'aether-md': '1rem',
        'aether-lg': '2rem',
      },
    },
  },
  plugins: [],
}
