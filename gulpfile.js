let gulp = require('gulp');
let sassdoc = require('sassdoc');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let rename = require('gulp-rename');

gulp.task('styles', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sassdoc())
        .pipe(sourcemaps.init())   
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['styles']);
