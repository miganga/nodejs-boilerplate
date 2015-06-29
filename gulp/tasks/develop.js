var gulp = require('gulp')
    , nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
    nodemon({ script: 'index.js', ext: 'html js', ignore: ['ignored.js'], args: [] })
        .on('restart', function () {
            console.log('restarted!')
        })
});