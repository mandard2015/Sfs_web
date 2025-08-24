/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-circles': `radial-gradient(circle at top left,
          rgba(2,48,131,0.4) 5%, 
          rgba(10,48,131,0.3) 28%,
          rgba(30,58,138,0.12) 28%,
          rgba(30,58,138,0.12) 45%,
          rgba(30,64,175,0.07) 45%,
          rgba(29,78,216,0.07) 63%,
          rgba(37,99,235,0.04) 63%,
          rgba(37,99,235,0.04) 100%)`,
      },
      keyframes: {
        pulseIcon: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        pulseIcon: 'pulseIcon 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

