var gulp = require('gulp');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

gulp.task('test', function() {
    gulp
        .src(TEST_FOLDER + '/**/*.js', { read: false})
        .pipe(plumber())
        .pipe(mocha({
            reporter: 'list',
            ui: 'bdd',
            ignoreLeaks: true
        }))
        .on('error', function() {});
});