/**
 * Created by Frank on 15/11/18.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var globby = require('globby');
var rename = require('gulp-rename');
var es = require('event-stream');
var nunjucks = require('gulp-nunjucks');
var babelify = require('babelify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('browserify', function () {
    globby(['./public/js/entries/**/*.js']).then((entries) => {
        function bundle(b, entry) {
            return b.transform(babelify, {presets: 'es2015'}).bundle()
                .pipe(source(path.relative('./public', entry)))
                .pipe(rename({
                    extname: '.bundle.js'
                }))
                .pipe(gulp.dest('build/')).pipe(livereload({star: true}));
        }

        var tasks = entries.map(entry => {
            var b = browserify({
                cache: {},
                packageCache: {},
                plugin: [watchify],
                entries: [entry],
                extensions: ['.js']
            });
            b.on('update', ()=> {
                bundle(b, entry);
            });
            return bundle(b, entry);
        });
        return es.merge.apply(null, tasks);
    }).catch((err)=> {
        console.log('browserify error: ', err.stack);
    });
});

gulp.task('clean:build', function () {

});

gulp.task('copy:css', function () {
    return gulp.src('public/css/*').pipe(gulp.dest('build/css'))
});

gulp.task('copy:images', function () {
    return gulp.src('public/images/*').pipe(gulp.dest('build/images'))
});

gulp.task('copy:fonts', function () {
    return gulp.src('public/fonts/*').pipe(gulp.dest('build/fonts'))
});

gulp.task('copy')

gulp.task('nunjucks', function () {
    return gulp.src('views/templates/*.html')
        .pipe(nunjucks())
        .pipe(gulp.dest('build/js/dist'));
});


gulp.task('develop', ['browserify']);