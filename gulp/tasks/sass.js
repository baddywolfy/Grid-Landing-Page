module.exports = function () {
    $.gulp.task('sass', function () { // Обращаемся через ппременную $ к Gulp`у, и вызываем метод task 
    return $.gulp.src('sass/style.scss')
        .pipe($.gp.plumber()) // Пропускаем код через плагин Plumber
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass())
        .pipe($.gp.autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe($.gp.csso()) // Минификация CSS файлов
        .pipe($.gp.rename('style.min.css'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/css'))
        .pipe($.browserSync.stream());

}); 
};

