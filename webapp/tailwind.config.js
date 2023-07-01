/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00204a",
        secondary: "#005792",
        tertiary: "#00bbf0",
        quaternary: "#fdb44b"
      },
    },
  },
  plugins: [],
}

