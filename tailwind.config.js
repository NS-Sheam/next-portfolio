/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "bandPrimary": '#77037B',
        // "bandSecondary": '#210062',
        // "bandTernary": "#009FBD",
        // "bandFont": "#F9E2AF"
        bandPrimary: "#003566",
        bandSecondary: "#001d3d",
        bandTernary: "#000814",
        bandFont: "#F9E2AF",
        bandOrange: "#ffc300",
        bandYellow: "#ffd60a",
        // ...
      },
    },
  },
  plugins: [],
};
