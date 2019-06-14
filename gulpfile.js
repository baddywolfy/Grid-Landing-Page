global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(), // Load All Gulp modules
    browserSync: require('browser-sync').create(),
    del: require('del'),
    imageminJpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    path: {
        config: require('./gulp/config'),
        jquery: './js/jquery.js',
        js: './js/**/*.js' // Пути для js файлов
    }
};

// Подключение всех тасков
$.path.config.forEach(function (path) {
    require(path) ();
});