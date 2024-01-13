/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
      '3xl' : '2000',
      },
    },
  },
  plugins :[require("tailwind-scrollbar-hide"),
require("@tailwindcss/line-clamp")
           ],
  darkMode: "class",
};
