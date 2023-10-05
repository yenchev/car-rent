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
        custom: "0 0 30px -10px rgba(0, 0, 0, 0.3)",
        hover: "0 0 35px -4px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
