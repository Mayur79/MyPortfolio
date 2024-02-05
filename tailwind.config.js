/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        ibm: ["IBM Plex Mono", "monospace"]

      }
    },
  },
  plugins: [],
}

