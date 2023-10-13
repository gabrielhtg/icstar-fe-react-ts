import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      warnabtn: "#04019A",
      warnadua: "#5E3EDD",
      bgUtama: "#F0F4F8",
      warnaHot: "#F10808",
      warnaWarm: "#FFA217",
      warnaCold: "#0D7BE0",
      successHover: "#2FB986",
    },
    daisyui: {
      themes: ["light", "dark"],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
