export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#CF1B1B",  // Correct hex format
        secondary: "#14191B",  // Correct hex format
        tertiary: "#D9D9D9",  // Correct hex format
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
