var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp
        .src([SRC_FOLDER + '/**/*.js', INDEX_FILE])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});