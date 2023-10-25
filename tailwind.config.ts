import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'third': '#232D3F',
        'primary': '#0A1931',
        'secondary': '#FFD700'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'personal': '9px 4px 112px 25px rgba(255, 255, 255, 0.25)'
      },
      fontFamily: {
        'arabic' : 'Tajawal'
      },
      spacing: {
        '128': '32rem',
        '220': '55rem',
      },
    },
  },
  plugins: [],
}
export default config
