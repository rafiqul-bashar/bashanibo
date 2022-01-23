module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lgLanding': "url('https://static.rdc.moveaws.com/images/hero/default/2021-2/hp-hero-desktop-1440w.webp')",
        'smLanding': "url('https://static.rdc.moveaws.com/images/hero/default/2021-2/hp-hero-mobile-375w.webp')",
      }
    },
  },
  plugins: [],
}