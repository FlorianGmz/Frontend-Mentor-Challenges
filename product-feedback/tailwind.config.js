/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "body-bg": "#F7F8FD",
      "bt-purple_def": "#AD1FEA",
      "bt-purple_hover": "#C75AF6",
      "bt-blue_def": "#4661E6",
      "bt-blue_hover": "#7C91F9",
      "bt-dark-blue_def": "#3A4374",
      "bt-dark-blue_hover": "#656EA3",
      "bt-red_def": "#D53637",
      "bt-red_hover": "#E98888",
      "bt-white_def": "#FFFFFF",
      "bt-white_font": "#657196",
      "bt-dark-blue_back": "#373F68",
      el_def: "#F2F4FE",
      el_hover: "#D0D7FF",
      el_active: "#4661E6",
      "el-font_def": "#3A4374",
      "el-comment": "#CDD2EE",
      "el-sort_active": "#C3C7D9",
      "feedback-description": "#637196",
      "feedback-board": "#DBDCFD",
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
      "comment-count": [
        "16px",
        {
          letterSpacing: "-0.22px",
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
      "body-4": [
        "15px",
        {
          letterSpacing: "-0.19px",
          fontWeight: "700",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
