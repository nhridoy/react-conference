/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        fancy:
          "url(https://img.icons8.com/external-outline-berkahicon/32/null/external-cursor-linely-cursor-and-pointer-outline-berkahicon-15.png), move",
      },
    },
    // colors: {
    //   primary: "#FFC93E",
    //   secondary: "#725114",
    //   clr: "#0A142F",
    // },
  },
  plugins: [],
};
