let mix = require('laravel-mix');

mix
    .js('src/index.js', 'public/js')
    .sass('src/app.scss', 'public/css', {
        sourceMap: true,
    })
    .sourceMaps();