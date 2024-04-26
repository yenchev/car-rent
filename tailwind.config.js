/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      boxShadow: {
        custom: "0 0 15px -4px rgba(0,0,0,0.3)",
        hover: "0 0 20px -4px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
