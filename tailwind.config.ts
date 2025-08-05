import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
      secondary: "#f59e0b",
      accent: "#10b981",
      background: "#ffffff",
      foreground: "#1f2937",

      },
    },
  },
  plugins: [],
};
export default config;
