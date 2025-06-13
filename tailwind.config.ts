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
        bg1: "var(--bg1)",
        bg2: "var(--bg2)",
      },
      screens: {
        'sm': '450px'
      },
    },
  },
  plugins: [],
} satisfies Config;
