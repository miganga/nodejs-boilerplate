/**
 * @desc gulp/watch tasks
 *      rerun specific tasks to reflect file changes
 *      development only
 */

'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');

module.exports = gulp.task('watch', function () {
    //run tests again if test file changes
    gulp.watch([
        SRC_FOLDER + '/*.js',
        SRC_FOLDER + '/**/*.js',
        TEST_FOLDER + '/**/*.js',
        INDEX_FILE
    ], ['test']);

    //run js-hint & tests again if source files change
    gulp.watch([
        SRC_FOLDER + '/**/*.js',
        INDEX_FILE
    ], ['lint']);
});