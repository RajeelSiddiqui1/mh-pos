/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#3b82f6" // define your custom color here
      }
    },
  },
  plugins: [],
}