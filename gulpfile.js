'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	nodemon = require('gulp-nodemon');

gulp.task('sass', function() {
	gulp.src('./app/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./app/css'))
		.pipe(notify("Sass Task Complete"));
});

gulp.task('server', function() {
	nodemon({
		script: 'server.js',
		ext: 'html js'
	}).on('restart', function() {
		console.log('Server restarted')
	})
});

//Watch Tasks
gulp.task('sass:watch', function () {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'server']);