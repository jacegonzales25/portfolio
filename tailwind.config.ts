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
        primary: "hsl(var(--primary))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
