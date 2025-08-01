/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home" : "url('/bg.jpg')"
      },
      backgroundSize: {
        "home-xl" : "43%"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
