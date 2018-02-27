var gulp = require('gulp');
var gulp-sass = require('gulp-sass');
gulp.task('sass',function(){
    gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/compiled.css'));
})
