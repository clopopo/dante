var config = require('../config');
if (!config.tasks.nodemon) return;

var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var nodemon = require('gulp-nodemon');
var nodemonConfig = config.tasks.nodemon;

var nodemonTask = function () {
    nodemon(nodemonConfig);
};

gulp.task('nodemon', nodemonTask);
module.exports = nodemonTask;
