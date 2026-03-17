/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
                        "primary-blue": "#2b8bcb",
                        "primary-green": "#4a9952",
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                         "charcoal": "#1F2937", // Charcoal Grey
                        "charcoal-dark": "#111827",
                    },
                    backgroundImage: {
                        'brand-gradient': 'linear-gradient(43deg, #2b8bcb 0%, #4a9952 100%)',
                    },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      boxShadow: {
                        'card-warm': '0 12px 30px -5px rgba(184, 166, 124, 0.25), 0 10px 15px -6px rgba(184, 166, 124, 0.15)',
                        'card-hover-warm': '0 30px 45px -12px rgba(184, 166, 124, 0.35)',
                    }
    },
  },
  plugins: [],
}