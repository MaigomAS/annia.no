/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#061018',
        fjord: '#0B1F2A',
        arctic: '#BDEBFF',
        cyanMist: '#6FE7F5',
        lichen: '#8FB8A0',
        bone: '#F2EFE7',
        steel: '#8AA0AF',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(111, 231, 245, 0.16)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'radial-fjord': 'radial-gradient(circle at 20% 20%, rgba(111,231,245,.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(143,184,160,.12), transparent 24%), linear-gradient(135deg, #061018 0%, #0B1F2A 52%, #07131B 100%)',
        grid: 'linear-gradient(rgba(189,235,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(189,235,255,.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
