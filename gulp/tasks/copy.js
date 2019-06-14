module.exports = function () {
    $.gulp.task('copy', function () { // Обращаемся через ппременную $ к Gulp`у, и вызываем метод task 
    return $.gulp.src([
        'fonts/**/*.{woff,woff2}',
        'img/**',
        '*.html'
    ], {
        base: '.'
     })
        
     .pipe($.gulp.dest('build'));

    }); 
};