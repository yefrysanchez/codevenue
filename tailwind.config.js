/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-right": "slideRight 0.8s ease-in-out forwards",
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};
