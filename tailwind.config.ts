import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': ['Merriweather', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'pitts': {
          'green': '#1a472a',
          'gold': '#d4af37',
          'beige': '#faf8f3',
          'white': '#fffef9',
        },
      },
      backgroundColor: {
        'warm': '#fffef9',
        'beige': '#faf8f3',
      },
    },
  },
  plugins: [],
}
export default config
