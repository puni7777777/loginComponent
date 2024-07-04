/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'slideLeft': 'slideLeft 1s ease-in-out',
        'slideRight': 'slideRight 1s ease-in-out',
      },
      keyframes: {
        slideRight: {
          '0%': { left: '0%', color: '#dc2626' },
          '100%': { left: '50%', color: 'white' },
        },
        slideLeft: {
          '0%': { left: '50%', color: '#dc2626' },
          '100%': { left: '0%', color: 'white' },
        },
      }
    },
  },
  plugins: [],
};
