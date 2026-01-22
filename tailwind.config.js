/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          muted: '#666666',
          light: '#999999',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
