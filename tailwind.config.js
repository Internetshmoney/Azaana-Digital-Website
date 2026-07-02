/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF4C2',
        ink: '#101512',
        muted: '#586256',
        teal: '#028F9E',
        cyan: '#26C4D8',
        deep: '#06353A',
        paper: '#F8FAF1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(16, 21, 18, 0.12)',
        card: '0 18px 55px rgba(6, 53, 58, 0.12)',
      },
    },
  },
  plugins: [],
};
