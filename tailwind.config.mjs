const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Franklin Gothic Medium"', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#f5cc00',
            '--tw-prose-headings': '#000814',
            '--tw-prose-lead': '#f5cc00',
            '--tw-prose-links': '#cca000',
            '--tw-prose-bold': '#000814',
            '--tw-prose-counters': '#f5cc00',
            '--tw-prose-bullets': '#f5cc00',
            '--tw-prose-hr': '#003566',
            '--tw-prose-quotes': '#000814',
            '--tw-prose-quote-borders': '#003566',
            '--tw-prose-captions': '#f5cc00',
            '--tw-prose-code': '#f5cc00',
            '--tw-prose-pre-code': '#f5cc00',
            '--tw-prose-pre-bg': '#003566/20',
            '--tw-prose-th-borders': '#003566',
            '--tw-prose-td-borders': '#003566',

            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      },
      colors: {
        'primary': '#000814', // Dark Blue
        'secondary': '#cca000', // Gold
        'accent': '#f5cc00', // Yellow
        'text': '#f5cc00', // Yellow
        'background': '#001d3d', // Medium Blue
        'surface': '#ffffff', // White
        'error': '#000814', // Dark Blue
        'success': '#cca000', // Gold
        'warning': '#f5cc00', // Yellow
        'info': '#000814', // Dark Blue
        'dark-blue': '#000814',
        'medium-blue': '#001d3d',
        'light-blue': '#003566',
        'gold': '#cca000',
        'yellow': '#f5cc00',
        'translucent': '#003566/40' // Light Blue with 40% opacity
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'media'
}
