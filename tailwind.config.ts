import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
