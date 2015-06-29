/**
 * @desc starting point for gulp tasks
 *      tasks sequence to be run
 *      --release tag for production
 */

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('dev-test', function() {
    runSequence(
        'lint',
        'test',
        'watch'
    );
});