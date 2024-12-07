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
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%",
            visibility: "visible"
          }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate",
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 12s linear infinite',
        'spin-slower': 'spin-slow 15s linear infinite',
      },
    },
  },
  plugins: [],
}
