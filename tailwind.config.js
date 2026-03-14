/** @type {import('tailwindcss').Config} */
module.exports = {
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
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0f172a",
        muted: "#475467",
        soft: "#f7f8fa",
        mist: "#eef2f6",
        brand: {
          pink: "#e75a94",
          blue: "#5bb5cf",
          lavender: "#a17dc3",
        },
      },
      boxShadow: {
        soft: "0 12px 30px -24px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
}
