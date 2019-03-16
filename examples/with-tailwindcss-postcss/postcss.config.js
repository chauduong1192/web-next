module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-nested'),
    require('cssnano'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ]
}