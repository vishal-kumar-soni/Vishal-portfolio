export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0a0c0f', panel: '#10141a', line: '#1f2630', cyan: { DEFAULT: '#22d3ee' }, violet: { DEFAULT: '#8b7cf6' } },
      fontFamily: { sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'] }
    }
  },
  plugins: []
}
