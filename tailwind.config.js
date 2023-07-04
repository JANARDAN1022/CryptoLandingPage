/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm':'600px',
       'md':'800px',
        'lg': '1100px',     // Large screens (computers/laptops)
      },
  },
  plugins: [],
}

