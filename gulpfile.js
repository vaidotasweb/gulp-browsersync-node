var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

gulp.task('watch', function () {

browserSync.init({
  files: '*.css',
  reloadDebounce: 500,
  host: 'localhost',
  port: 8080,
  middleware: function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  }
})

gulp.watch('*.css', reload);

});
