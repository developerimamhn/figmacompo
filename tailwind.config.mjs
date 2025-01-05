/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      images: {
        domains: ['i.imgur.com'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        quicksand: ['"General Sans"', 'sans-serif'], // Add the General Sans font
      },
      screens: {
        '3xl': '1820px',
        '4xl': '1920px',
        '5xl': '2020px',
        '6xl': '2120px',
        '7xl': '2320px',
        '8xl': '2420px',
        '9xl': '2520px',
      },
    },
  },
  container: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1820px',
      '4xl': '1920px',
      '5xl': '2020px',
      '6xl': '2220px',
      '7xl': '2320px',
      '8xl': '2420px',
      '9xl': '2520px',
    },
  },
  plugins: [],
};
