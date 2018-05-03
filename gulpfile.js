const gulp = require('gulp');
const sassDoc = require('sassdoc');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const sassLint = require('gulp-sass-lint');
const sequence = require('run-sequence');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

// Compiles Sass files into CSS
gulp.task('styles', ['sass-lint', 'sass:docs'], () => {
  return sequence('sass');
});

gulp.task('sass', cb => {
  gulp
    .src('scss/**/*.scss')
    .pipe(sassDoc())
    .pipe(sourcemaps.init())
    .pipe(
      sass().on('error', err => {
        console.error('\x07'); // output error
        sass.logError.bind(this)(err);
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7']
        })
      ])
    )
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({ compatibility: 'ie9' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('docs')) && cb();
});

gulp.task('sass-lint', () => {
  return gulp
    .src(['scss/**/*.scss'])
    .pipe(
      sassLint({
        config: './.sass-lint.yml'
      })
    )
    .pipe(sassLint.format());
});

gulp.task('sass:docs', () => {
  return gulp
    .src('docs/demo.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on('error', err => {
        console.error('\x07'); // output error
        sass.logError.bind(this)(err);
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('docs'));
});

gulp.task('browserSync', cb => {
  browserSync.init({
    server: './docs',
    files: ['*.css', '*.html'],
    open: true
  }) && cb();
});

// Static Server + watching scss/html files
gulp.task('serve', ['browserSync'], () => {
  sequence('sass-lint', 'styles');
  gulp.watch('**/*.scss', ['styles']);
  gulp
    .watch(['docs/*.css', 'docs/*.html'], browserSync.reload)
    .on('change add', browserSync.reload);
});

gulp.task('default', ['styles']);
