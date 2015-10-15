'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify');

function log(arg) {
	console.log(arg);
}

gulp.task('sass', function() {
	gulp.src('./app/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./app/css'))
		.pipe(notify("Sass Task Complete"));
});

//Watch Tasks
gulp.task('sass:watch', function () {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);