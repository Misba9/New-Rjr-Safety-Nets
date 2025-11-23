/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-primary': '#f58634',
        'brand-dark-blue': '#002c4c',
        'brand-light-gray': '#f8f9fa',
        'brand-text': '#333333',
      }
    },
  },
  plugins: [],
}
