const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp
    .src('./src/styles/main.scss')
    .pipe(sass(
        { outputStyle: 'compressed' }
    ))
    .pipe(gulp.dest('./dist/styles'));
}

function comprimeImagens() {
    return gulp
    .src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function comprimeJs() {
    return gulp
    .src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

exports.sass = compilaSass;
exports.images = comprimeImagens;
exports.js = comprimeJs;

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJs));
}

