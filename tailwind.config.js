/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rBold: ['roboBold', 'monospace'],
        rMedium: ['roboMedium', 'monospace'],
        rRegular: ['roboRegular', 'monospace'],
        rThin: ['roboThin', 'monospace'],
        uDog: ['underdog', 'monospace'],
      },
      colors: {
        royalBlue: '#1B56FD',
        royalGreen: '#1DCD9F',
      },
    },
  },
  plugins: [],
};
