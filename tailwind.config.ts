import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        link: "var(--color-link)",
        accent: "var(--color-accent)",
        lime: {
          DEFAULT: "#C8FF3D",
          hover: "#bcf728",
          text: "#14102A",
        },
        violet: {
          DEFAULT: "#6D32E8",
          light: "#A77BFF",
          dark: "#4D1BB8",
        },
      },
      borderRadius: {
        "card-sm": "20px",
        card: "24px",
        "card-lg": "28px",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(20, 16, 42, 0.05), 0 2px 6px -1px rgba(20, 16, 42, 0.03)",
        "soft-lg": "0 10px 30px -4px rgba(20, 16, 42, 0.08), 0 4px 10px -2px rgba(20, 16, 42, 0.04)",
        "dark-soft": "0 4px 24px -2px rgba(0, 0, 0, 0.45), 0 2px 6px -1px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(0.97)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scroll-feed": "scroll 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
