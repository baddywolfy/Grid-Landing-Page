const jsFiles = [
    $.path.jquery,
    $.path.js, // Обращаемся к путям указанным в gulpfile
];

module.exports = function () {
    $.gulp.task('scripts', function () { // Обращаемся через ппременную $ к Gulp`у, и вызываем метод task 
    return $.gulp.src(jsFiles)
        .pipe($.gp.plumber()) // Пропускаем код через плагин Plumber
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ['@babel/preset-env']})) // Переводит в синтаксис ES5
        .pipe($.gp.concat('all.js')) // Конкатенация js файлов
        .pipe($.gp.uglify()) // Минификация js файлов
        .pipe($.gp.rename('all.min.js'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/js'))
        .pipe($.browserSync.stream());

}); 
}; 