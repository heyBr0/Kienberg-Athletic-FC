/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  /*   darkMode: false, */
  theme: {
    extend: {
      colors: {
        kienbergGreen: {
          DEFAULT: "#A0DD9F",
        },
        kienbergPurple: {
          DEFAULT: "#7F5A83",
        },
        kienbergWhite: {
          DEFAULT: "#eef0f2",
        },
        kienbergBlack: {
          DEFAULT: "#1a1d1a",
        }       
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
