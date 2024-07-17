import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    screens: {
      'sm': {'max':'649px'},
      // => @media (min-width: 576px) { ... }

      'md':  {'min':'650px'},
      // => @media (min-width: 960px) { ... }

      'lg': { 'min': '1440px'},
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'darkPrimary': '#333',
      'darkSecondary': '#555',
      'lightPrimary': '#f1f1f1',
      'lightSecondary': '#ccc',
      'scrollBarThumb': '#888',
      'scrollBarThumbHover': '#555',
      'blue': '#007bff',
      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      'red': '#dc3545',
      'orange': '#fd7e14',
      'yellow': '#ffc107',
      'green': '#28a745',
      'teal': '#20c997', 
      'cyan': '#17a2b8',
      'white': '#fff',
      'gray': {
        100: '#f8f9fa',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#6c757d',
        700: '#495057',
        800: '#343a40',
        900: '#212529',
      },
      'black': '#000',
    },
    extend: {
      boxShadow: {
        custom: '0 7px 46px rgba(30,32,68,.24)',
      },
    }
  },
  plugins: [],
};
export default config;
