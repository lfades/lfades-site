import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "ctp-rosewater": "var(--ctp-rosewater)",
        "ctp-flamingo": "var(--ctp-flamingo)",
        "ctp-pink": "var(--ctp-pink)",
        "ctp-mauve": "var(--ctp-mauve)",
        "ctp-red": "var(--ctp-red)",
        "ctp-maroon": "var(--ctp-maroon)",
        "ctp-peach": "var(--ctp-peach)",
        "ctp-yellow": "var(--ctp-yellow)",
        "ctp-green": "var(--ctp-green)",
        "ctp-teal": "var(--ctp-teal)",
        "ctp-sky": "var(--ctp-sky)",
        "ctp-sapphire": "var(--ctp-sapphire)",
        "ctp-blue": "var(--ctp-blue)",
        "ctp-lavender": "var(--ctp-lavender)",
        "ctp-text": "var(--ctp-text)",
        "ctp-subtext1": "var(--ctp-subtext1)",
        "ctp-subtext0": "var(--ctp-subtext0)",
        "ctp-overlay2": "var(--ctp-overlay2)",
        "ctp-overlay1": "var(--ctp-overlay1)",
        "ctp-overlay0": "var(--ctp-overlay0)",
        "ctp-surface2": "var(--ctp-surface2)",
        "ctp-surface1": "var(--ctp-surface1)",
        "ctp-surface0": "var(--ctp-surface0)",
        "ctp-base": "var(--ctp-base)",
        "ctp-mantle": "var(--ctp-mantle)",
        "ctp-crust": "var(--ctp-crust)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--ctp-text)",
            a: {
              color: "var(--ctp-blue)",
              "&:hover": {
                color: "var(--ctp-lavender)",
              },
            },
            h1: {
              color: "var(--ctp-mauve)",
            },
            h2: {
              color: "var(--ctp-mauve)",
            },
            h3: {
              color: "var(--ctp-mauve)",
            },
            code: {
              color: "var(--ctp-peach)",
              backgroundColor: "var(--ctp-surface0)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
            pre: {
              backgroundColor: "var(--ctp-surface0)",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
