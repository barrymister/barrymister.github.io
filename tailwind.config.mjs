/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      },
      backgroundColor: {
        'var-highlight': 'var(--highlight-color)',
      },
      textColor: {
        'var-text': 'var(--text-color)',
        'var-link': 'var(--link-color)',
        'var-secondary': 'var(--secondary-color)',
      },
      borderColor: {
        'var-secondary': 'var(--secondary-color)',
        'var-link': 'var(--link-color)',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'media'
}
