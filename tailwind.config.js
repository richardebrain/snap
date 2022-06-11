/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'375px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',

    },
    colors: {
      'almostWhite': "hsl(0, 0%, 98%)",
      'mediumGray': "hsl(0, 0%, 41%)",
      'almostBlack': "hsl(0, 0%, 8%)",
      'white':'white'
    },
    extend: {
      boxShadow:{
        '3xl':'-3px 2px 24px 6px rgba(158,140,140,0.40)'
      }
    },
  },
  plugins: [],
};
