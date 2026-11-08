/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { brand: { y: '#FFD93D', p: '#FF7AB6', b: '#6FA8FF', g: '#5EEAA8', o: '#FF9A3C' }, ink: 'var(--ln)', surf: 'var(--surf)', page: 'var(--bg)' },
    boxShadow: { sm: '4px 4px 0 var(--ln)', md: '7px 7px 0 var(--ln)', lg: '10px 10px 0 var(--ln)' },
    borderWidth: { DEFAULT: '3px' }, borderRadius: { none: '0' },
    fontFamily: { head: ['Space Grotesk', 'sans-serif'], body: ['Space Mono', 'monospace'], ar: ['Cairo', 'sans-serif'], mono: ['Space Mono', 'monospace'], sans: ['Space Grotesk', 'sans-serif'] }
  } },
  plugins: []
};
