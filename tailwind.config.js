/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A52',
        'navy-deep': '#16293B',
        blue: '#4A6FB5',
        'light-blue': '#D5E0EA',
        cream: '#F8F5F0',
        ink: '#2A3744',
        muted: '#6B7780',
        rule: '#C9D2DA',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
