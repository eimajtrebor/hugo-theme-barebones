let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './assets/css/tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig)

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [ './hugo_stats.json' ],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
    }
});

module.exports = {
  plugins: [
      tailwind,
      require('autoprefixer'),
      ...(process.env.HUGO_ENVIRONMENT === 'production' ? [ purgecss ] : [])
  ],
}
