// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     screens: {
//       'xs': '480px',

//       'sm': '640px',
//       // => @media (min-width: 640px) { ... }

//       'md': '768px',
//       // => @media (min-width: 768px) { ... }

//       'lg': '1024px',
//       // => @media (min-width: 1024px) { ... }

//       'xl': '1280px',
//       // => @media (min-width: 1280px) { ... }

//       '2xl': '1536px',
//       // => @media (min-width: 1536px) { ... }
//     }
//     // extend: {},
//   },
//   plugins: [],
// }




const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
 

module.exports =withMT( {
  content: [
    "./index.html", // Your existing content
    "./src/**/*.{js,ts,jsx,tsx}", // Additional content
  ],
  theme: {
    screens: {
      'xs': '475px',
      'mds':'875px',
       // Your custom breakpoint
      ...defaultTheme.screens, // Include the default breakpoints
    },
  },
  plugins: [],
});
