import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        text2: "var(--text2)",
        text3: "var(--text3)",
        text4: "var(--text4)",
        text5: "var(--text5)",
        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
      },
      screens: {
        'sm': '450px'
      },
    },
  },
  plugins: [],
} satisfies Config;
