var gulp = require('gulp'),
    gutil    = require('gulp-util'),
    concat  = require('gulp-concat'),
    jade = require('gulp-jade'),
    del = require('del');

// CLEAN: clear Dist folder
gulp.task('clean', function(){
  del(['./dist*'])
});

// gulp.task('clean', function(){
//   return gulp.src(['dist/*'], {read:false})
//   .pipe(del());
// });


// COPY: Public folder to Dist
gulp.task('copy', ['clean'], function() {
  gulp.src('./public/**/*', {base: './public'})
    .pipe(gulp.dest('./dist/'))
});

// HTML: convert jade to HTML
gulp.task('html', function() {

  gulp.src('./views/index.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});


// RUN
gulp.task('default', ['copy', 'html']);
