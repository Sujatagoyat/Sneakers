/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dist/js/script.js"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins' , sans-serif",
        'JosefinSans': "'JosefinSans' , sans-serif",
      },
    },
  },
  plugins: [],
}

