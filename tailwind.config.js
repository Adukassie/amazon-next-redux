/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  media: false, // or 'media ' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#195851",
          DEFAULT: "#0e3d30",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    // ...
  ],
};
