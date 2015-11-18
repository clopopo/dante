/**
 * Created by Frank on 15/11/18.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var path = require('path');

// Basic usage
gulp.task('scripts', function () {
    // Single entry point to browserify
    var bundleStream = browserify(path.resolve(__dirname, 'public/js/app.js')).bundle();

    bundleStream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(path.resolve(__dirname, 'public/build')));

});