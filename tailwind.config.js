/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'stars': "url('../public/stars.svg')",
        'lines': "url('../public/lines.svg')"
      },
      colors: {
        "duo-orange": "#FF1515",
        "duo-blue": "#0014FF",
        "duo-light-blue-100": "#009EFF",
        "duo-light-blue-200": "#00E7FF",
        "duo-light-blue-300": "#00FFF6",
        "duo-dark-gray": "#2F2F2F",
        "duo-light-gray": "#F3F3F3",
        "duo-stroke": "#C8C8C8"
      }
    },
  },
  plugins: [],
}
