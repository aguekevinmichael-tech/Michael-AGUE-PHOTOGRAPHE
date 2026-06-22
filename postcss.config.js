const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      // Ici tu indiques les fichiers HTML et JS que PurgeCSS doit analyser
      content: ['./*.html', './**/*.html', './**/*.js'],
      // Ton fichier CSS à nettoyer
      css: ['./style.css'],
    })
  ]
}
