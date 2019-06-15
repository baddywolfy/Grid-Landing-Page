module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src('build/img/**/*.{png,jpg,svg}')
        .pipe($.gp.imagemin([
          $.gp.imagemin.jpegtran({progressive: true}),
          $.imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: [0.7, 0.8]
          }),
          $.gp.imagemin.optipng({optimizationLevel: 3}),
          $.pngquant({quality: [0.3, 0.5], speed: 5}), //{quality: '65-70'
          $.gp.imagemin.svgo()
        ]))
        .pipe($.gulp.dest('build/img'));
  });
};