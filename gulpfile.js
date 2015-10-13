'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	gulp.src('./app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./app/maps'))
		.pipe(gulp.dest('./app/styles'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./app/scss/*.scss', [sass]);
});

gulp.task('default', function() {
  // place code for your default task here
});