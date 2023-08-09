/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--background-primary)",
        bgSecondary: "var(--background-secondary)",
        fgPrimary: "var(--foreground-primary)",
        fgSecondary: "var(--foreground-secondary)",
      },
      transform: ['responsive', 'hover', 'focus', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}

