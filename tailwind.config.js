module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  //darkMode: false, // or 'media' or 'class'
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/mr.jpg')",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif", "Grechen Fuemen"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
