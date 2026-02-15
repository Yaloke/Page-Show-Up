import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          card: "#111111",
          elevated: "#141414",
          quote: "#0E0E0E",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#E8C868",
          muted: "rgba(212,168,83,0.15)",
        },
        text: {
          primary: "#F5F1EB",
          secondary: "#C4BFB6",
          muted: "#B0ABA3",
          dim: "#6B665E",
          ghost: "#3A3832",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
