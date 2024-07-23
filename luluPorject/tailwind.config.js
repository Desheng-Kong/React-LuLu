/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    { 
      screens: {
        'xs': '380px', 
        'md': '768px',
        'lg': '950px',
        'xl': '1024px',
      },
    },
  },
  plugins: [],
}