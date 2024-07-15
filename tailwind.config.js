/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },

      boxShadow: {
        custom: "0px 20px 50px -20px #FF7E1B;",
        cart: "0px 20px 50px -20px rgba(29, 32, 38, 0.50)"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
