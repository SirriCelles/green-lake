import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading2-bold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading2-semibold": [
        "30px",
        {
          lineHeight: "126.66%",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading3-semibold": [
        "24px",
        {
          lineHeight: "133.333%",
          fontWeight: "600",
        },
      ],
      "heading4-medium": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        "16px",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "142.857%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "142.857%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],

    },
    extend: {
      colors: {
        "primary": "#B53300",
        "primary-50": "#FFEDE6",
        "primary-200": "#FFAB8A",
        "primary-500": "#FF4800",
        "primary-700": "#B53300",
        "primary-600": "#E84200",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "success-100": "#D1FADF",
        "success-600": "#039855",
        "warning-400": "#FDB022",
        "purple-100": "#F4EBFF",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
