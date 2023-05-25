/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        '1/10': "10vh",
        '2/10': "20vh",
        '3/10': "30vh",
        '4/10': "40vh",
        '5/10': "50vh",
        '6/10': "60vh",
        '7/10': "70vh",
        '8/10': "80vh",
        '9/10': "90vh",
        '95/10': "95vh",
      }
    },
  },
  plugins: [],
};
