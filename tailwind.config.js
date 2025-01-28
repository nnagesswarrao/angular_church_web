/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all HTML and TypeScript files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#ffd700',
      },
      backgroundImage: {
        'church-pattern': "url('/assets/images/church-bg.jpg')",
      }
    },
  },
  plugins: [],
};
