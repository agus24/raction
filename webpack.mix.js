const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, '/src/assets')
        ]
    }
});

// mix.sass('src/assets/scss/style.scss', 'public/css/app.css');

mix.styles([
    "src/assets/css/animate.min.css",
    "src/assets/css/bootstrap.min.css",
    "src/assets/css/font-awesome.min.css",
    "src/assets/css/helper.min.css",
    "src/assets/css/ionicons.min.css",
    "src/assets/css/jquery.mb.YTPlayer.min.css",
    "src/assets/css/leaflet.min.css",
    "src/assets/css/magnific-popup.min.css",
    "src/assets/css/nice-select.min.css",
    "src/assets/css/slick.min.css",
    "src/assets/css/slicknav.min.css",
    "src/assets/css/style.css",
    // "src/assets/css/style.min.css"
], "public/css/app.css");