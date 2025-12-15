module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        primary: "rgb(var(--primary))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [],
}
