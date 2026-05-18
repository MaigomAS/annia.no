/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#070F24',
        fjord: '#11284A',
        arctic: '#D7E7FF',
        cyanMist: '#7EA6FF',
        lichen: '#9BB7E8',
        bone: '#F5F8FF',
        steel: '#9AAAC8',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(126, 166, 255, 0.22)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'radial-fjord': 'radial-gradient(circle at 20% 20%, rgba(126,166,255,.20), transparent 28%), radial-gradient(circle at 80% 0%, rgba(155,183,232,.16), transparent 24%), linear-gradient(135deg, #070F24 0%, #11284A 52%, #0A1633 100%)',
        grid: 'linear-gradient(rgba(215,231,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,231,255,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
