const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Specify 'sass' as the compiler
const babel = require('gulp-babel');

// Rest of your Gulp tasks

// Example Sass task
gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Example Babel task
gulp.task('babel', () => {
  return gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

// Watch task
gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', gulp.series('sass'));
  gulp.watch('src/js/*.js', gulp.series('babel'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'babel', 'watch'));
