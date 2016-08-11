let gulp = require('gulp'),
  babel = require('gulp-babel');

gulp.task('babel', ['react', 'react-dom', 'marked'], function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({}))
    .pipe(gulp.dest(
      'dist/'
    ));
});

gulp.task('react', function () {
  return gulp.src('node_modules/react/dist/react.min.js')
    .pipe(gulp.dest('dist/'));
});
gulp.task('react-dom', function () {
  return gulp.src('node_modules/react-dom/dist/react-dom.min.js')
    .pipe(gulp.dest('dist/'));
});
gulp.task('marked', function () {
  return gulp.src('node_modules/marked/marked.min.js')
    .pipe(gulp.dest('dist/'));
})