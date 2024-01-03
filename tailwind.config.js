/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      // "bandPrimary": '#77037B', // purple
      // "bandSecondary": '#210062', // dark purple
      // "bandTernary": "#009FBD", // blue
      // "bandFont": "#F9E2AF" // yellow

      // bandPrimary: "#003566", // blue
      bandPrimary: "#3a0ca3", // blue
      bandSecondary: "#001d3d", // dark blue
      bandTernary: "#000814", // black
      bandFont: "#F9E2AF", // yellow
      bandOrange: "#ffc300", // orange
      bandYellow: "#ffd60a", // yellow
      // ...
    },
  },
};
export const plugins = [];
