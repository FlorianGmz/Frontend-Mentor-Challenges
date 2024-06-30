/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "body-bg": "#F7F8FD",
      "bt-purple": "#AD1FEA",
      "bt-purple_hover": "#C75AF6",
      "bt-blue": "#4661E6",
      "bt-blue_hover": "#7C91F9",
      "bt-dark-blue": "#3B4374",
      "bt-dark-blue_hover": "#656EA3",
      "bt-red": "#D53637",
      "bt-red_hover": "#E98888",
      "bt-white": "#FFFFFF",
      "bt-white_font": "#657196",
      "bt-dark-blue_back": "#373F68",
    },
    fontSize: { test: ["20px", "20px"] },
    extend: {},
  },
  plugins: [],
};
