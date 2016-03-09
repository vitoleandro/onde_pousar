'use strict'

const Gulp = require('gulp');
const Sass = require('gulp-sass');

let path = {
  dev       : 'app/assets/stylesheets/sass/',
  dist      : 'app/assets/stylesheets/',
  sass_files: 'app/assets/stylesheets/sass/**/*.scss'
}

Gulp.task('sass', () => {
  return Gulp.src(path.dev)
    .pipe(Sass())
    .pipe(Gulp.dest(path.dist))
});

Gulp.task('default', ['sass'], () => {
  Gulp.watch('app/assets/stylesheets/sass/**/*.scss', ['sass']);
});
