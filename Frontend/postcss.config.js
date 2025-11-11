// Try to use the new Tailwind PostCSS plugin if available, otherwise fall back to the classic `tailwindcss` package.
let tailwindPlugin;
try {
  tailwindPlugin = require('@tailwindcss/postcss');
} catch (e) {
  // Fallback for environments using older tailwind packages
  tailwindPlugin = require('tailwindcss');
}

module.exports = {
  plugins: [
    tailwindPlugin,
    require('autoprefixer'),
  ],
};
