/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/aether/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [
    require('../../packages/aether/tailwind.config.js')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
