import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-500": "var(--primary-500)",
        "primary-900": "var(--primary-900)",

        "secondary-100": "var(--secondary-100)",
        "secondary-500": "var(--secondary-500)",
        "secondary-900": "var(--secondary-900)",

        "grey-100": "var(--grey-100)",
        "grey-500": "var(--grey-500)",
        "grey-900": "var(--grey-900)",

        divider: "var(--divider)",
      },
      backgroundColor: {
        default: "var(--black)",
        paper: "var(--white)",
      },
    },
  },
  plugins: [],
};
export default config;
