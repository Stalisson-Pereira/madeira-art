/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        sand: {
          50: "#F7F3EE",
          100: "#EFE7DE",
          200: "#E3D6C7",
          300: "#D2BEA7",
          400: "#BE9D7A",
        },
        charcoal: {
          900: "#1F1F1F",
          800: "#2A2A2A",
          700: "#3A3A3A",
        },
        wood: {
          500: "#B07A3A",
          600: "#9A682F",
          700: "#805424",
        },
        sage: {
          500: "#6F7D6A",
          600: "#5F6C5B",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31,31,31,0.08)",
      },
    },
  },
  plugins: [],
};
