/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jostBold7: ["Jost-Bold700"],
        jostBold6: ["Jost-Bold600"],
        jostNormal: ["Jost-Normal"],
        interBold: ["inter-Bold"],
        interNormal: ["inter-Normal"],
        jost: ["Jost"],
        inter: ["Inter"],
      },
      colors: {
        customGreen: "#7ED957",
        "custom-green1": "rgba(73, 119, 53, 0.51)",
        "custom-green2": "rgba(126, 217, 87, 1)",
        "custom-green3": "rgba(73, 119, 53, 0.8)",
      },
      keyframes: {
        dissolve: {
          "0%": {
            opacity: "0.2",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        dissolve: "dissolve 0.2s ease-in-out forwards",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      mm: "700px",
      md: "820px",
      cs: "1090px",
      lg: "1124px",
      xl: "1280px",
    },
  },
  plugins: [],
};
