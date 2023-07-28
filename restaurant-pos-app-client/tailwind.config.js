/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "notosanslao", "vietnampro", "sans-serif"],
        gilroy: ["gilroy", "notosanslao", "vietnampro", "sans-serif"],
        vietnampro: ["vietnampro", "sans-serif"],
        notosanslao: ["notosanslao", "sans-serif"],
      },
      colors: {
        primary: "#0891b2",
        secondary: "#ecc94b",
        textPrimary: "#001C30",
      },
    },
  },
  plugins: [],
};
