/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      gridTemplateColumns: {
        // 定义自定义的模板列
        '30-auto': '30% auto',
      }
    },
  },
  plugins: [],
}