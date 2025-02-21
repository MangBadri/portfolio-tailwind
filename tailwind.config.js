/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0d9488",
        dark: "#0f172a",
        secondary: "#6b7280",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
