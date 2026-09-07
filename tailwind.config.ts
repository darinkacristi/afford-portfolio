import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta corporativa — Manual de identidad Afford
        verde: "#2B7A58",
        bosque: "#0A4229",
        brote: "#7AB774",
        menta: "#C9F2DC",
        hueso: "#EDEDED",
        tinta: "#111111",
        "tinta-2": "#1B1B1B",
        gris: "#6E6E6E",
      },
      fontFamily: {
        display: ["var(--font-cal)", "var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      borderRadius: {
        marca: "20px",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
