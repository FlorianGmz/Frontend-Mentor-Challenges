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
    fontSize: {
      h1: [
        "24px",
        {
          lineHeight: "35px",
          letterSpacing: "-0.33px",
          fontWeight: "700",
        },
      ],
      h2: [
        "20px",
        {
          lineHeight: "29px",
          letterSpacing: "-0.25px",
          fontWeight: "700",
        },
      ],
      h3: [
        "18px",
        {
          lineHeight: "26px",
          letterSpacing: "-0.25px",
          fontWeight: "700",
        },
      ],
      h4: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.2px",
          fontWeight: "700",
        },
      ],
      "body-1": [
        "16px",
        {
          lineHeight: "23px",
          fontWeight: "400",
        },
      ],
      "body-2": [
        "15px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      "body-3": [
        "13px",
        {
          lineHeight: "19px",
          fontWeight: "600",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
