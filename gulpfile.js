'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify'),
	nodemon = require('gulp-nodemon'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	config = {
		watch: {
			scss: [
				'./app/sass/*.scss'
			],
			js: [
				'./app/*.js',
				'./app/**/*.js'
			]
		}
	};

gulp.task('sass', function() {
	gulp.src(config.watch.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./app/css'))
		.pipe(notify("Sass Task Complete"));
});

gulp.task('lint', function() {
	gulp.src(config.watch.js)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
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
gulp.task('watch', function () {
	gulp.watch('./app/sass/**/*.scss', ['sass']);
	gulp.watch('./app/js/**/*.scss', ['lint']);
});

gulp.task('default', ['watch', 'server', 'lint']);