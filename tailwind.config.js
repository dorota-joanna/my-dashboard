/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',   // blue
        secondary: '#f97316', // orange
        accent: '#14b8a6',    // teal
        background: '#f3f4f6', // light gray
      },
    },
  },
  plugins: [],
}

