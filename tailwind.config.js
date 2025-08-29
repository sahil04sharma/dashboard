/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B82F6",
          dark: "#1E40AF"
        }
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
