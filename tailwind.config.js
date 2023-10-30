/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        viewButtonGray: 'rgba(var(--color-secondary), 0.53)',
        mainStackOrange: '#FF5403',
        colorCode1: '#0088FE', 
        colorCode2:'#00C49F', 
        colorCode3:'#FFBB28', 
        colorCode4:'#FF8042', 
        colorCode5:'#FF6600'
      },
    },
  },
  plugins: [],
};

