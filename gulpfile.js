var shims = require('./config/shims');
var sharedModules = Object.keys(shims).concat([
  // place all modules you want in the lib build here
  'barf'
]);

var gulp = require('gulp');
var gutil = require('gulp-util');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var source = require('vinyl-source-stream');
var browserify = require('browserify');

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('www/app/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
    .pipe(reload({stream: true}));
});

gulp.task('browserify:lib', function() {
  var bundleStream = browserify('./www/lib/libs.js');

  return bundleStream
    .require(sharedModules)
    .bundle()
    .pipe(source('libs.js'))
    .pipe(gulp.dest('./www/dist/js'))
    .on('error', gutil.log);
});

gulp.task('browserify:app', function() {
  var bundleStream = browserify('./www/app/init.js');

  return bundleStream
    .external(sharedModules)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/dist/js'))
    .on('error', gutil.log);
});

gulp.task('browserify', ['browserify:lib', 'browserify:app']);

// Optimize Images
gulp.task('images', function () {
  return gulp.src('www/assets/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('www/dist/images'))
    .pipe(reload({stream: true, once: true}))
    .pipe($.size({title: 'images'}));
});

// Automatically Prefix CSS
gulp.task('styles:css', function () {
  return gulp.src('www/assets/styles/**/*.css')
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('www/assets/styles'))
    .pipe(reload({stream: true}))
    .pipe($.size({title: 'styles:css'}));
});

// Compile Any Other Sass Files You Added (app/styles)
gulp.task('styles:scss', function () {
  return gulp.src(['app/styles/**/*.scss'])
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['www/assets/styles']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size({title: 'styles:scss'}));
});

// Output Final CSS Styles
gulp.task('styles', ['styles:scss', 'styles:css']);

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  return gulp.src('./www/*.html')
    .pipe($.useref.assets({
      searchPath: ['.tmp', 'www']
    }))
    // Concatenate And Minify JavaScript
    //.pipe($.if('*.js', $.uglify()))
    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    // Remove Any Unused CSS
    .pipe($.useref.restore())
    .pipe($.useref())
    // Minify Any HTML
    .pipe($.minifyHtml())
    // Output Files
    .pipe(gulp.dest('www/dist'))
    .pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'www/dist']));

// Watch Files For Changes & Reload
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: ['www', '.tmp']
    },
    notify: false
  });

  gulp.watch(['www/app/**/*.html'], reload);
  gulp.watch(['www/assets/styles/**/*.{css,scss}'], ['styles']);
  gulp.watch(['.tmp/styles/**/*.css'], reload);
  gulp.watch(['www/app/**/*.js'], ['jshint', 'browserify']);
  gulp.watch(['www/assets/images/**/*'], ['images']);
});

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', 'browserify', ['jshint', 'html', 'images'], cb);
});

