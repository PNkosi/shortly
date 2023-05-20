/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      //Primary Colors
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
      //Secondary Colors
        red: 'hsl(0, 87%, 67%)',
      //Neutral Colors
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}
