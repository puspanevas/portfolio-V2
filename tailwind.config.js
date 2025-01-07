/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite forwards',
      },
      colors: {
        'grey': '#999D9E',
        'orange': '#ff7a49',
        'white': '#FFFFFF',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(10%)' },
          to: { transform: 'translateX(-100%)' },
          // from: { transform: 'rotate(0deg)' },
          // to: { transform: 'rotate(360deg)' },
        }
      }       
    },
    fontSize: {
      xs: '.5rem',
      sm: '1rem',
      base: '1.25rem',
      lg: '2rem',
      xl: '12rem',
    }
  },
  plugins: [],
}