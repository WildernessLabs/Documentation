/// <binding AfterBuild='dist' />
'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
const browserslist = require('browserslist')

// Browser
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var refresh = require('gulp-livereload');

// CSS
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

// JS
var uglify = require('gulp-uglify-es').default;;
var pipeline = require('readable-stream').pipeline;
var browserSync = require('browser-sync').create();

var del = require('del');
var runSequence = require('run-sequence');

var $ = gulpLoadPlugins();
var reload = browserSync.reload;
var wwwroot = './wwwroot';

/* Style Tasks */
gulp.task('styles', function () {
    return gulp.src([wwwroot + '/css/src/**/main.scss', wwwroot + '/css/src/**/*.css'])
        .pipe($.sass.sync().on('error', $.sass.logError))
        .pipe($.autoprefixer({ overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
        .pipe(gulp.dest(wwwroot + '/dist/css'))
        .pipe(reload({ stream: true }));
});

/* Style Tasks */
gulp.task('styles:dist', function () {
    return gulp.src([wwwroot + '/css/src/main.scss', wwwroot + '/css/src/**/*.css'])
        .pipe($.sass.sync().on('error', $.sass.logError))
        .pipe($.autoprefixer({ overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(wwwroot + '/dist/css'))
        .pipe(reload({ stream: true }));
});

gulp.task('styles:watch', function () {
    gulp.watch(wwwroot + '/css/src/**/*.scss', ['styles'])

});


gulp.task('fonts', function () {
    return gulp.src([wwwroot + '/css/src/fonts/'])
        .pipe(gulp.dest(wwwroot + '/dist/css'))
});

gulp.task('scripts:dist', function () {
    gulp.src([wwwroot + '/js/**/*.js', '!./js/src/'])
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(wwwroot + '/dist/js'));
});

gulp.task('scripts:watch', function () {
    gulp.watch(wwwroot + '/js/src/**/*.js', ['scripts']);
});

gulp.task('scripts:dist', function () {
    gulp.src([wwwroot + '/js/**/*.js', '!./js/src/'])
        .pipe(browserify())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(wwwroot + '/dist/js'));
});

gulp.task('scripts:minify', function () {
  return pipeline(
        gulp.src(wwwroot + '/dist/js/main.js'),
        uglify(),
        gulp.dest(wwwroot + '/dist/js')
  );
});


/* HTML Tasks */
gulp.task('html:dist', function () {
    gulp.src("./*.html")
        .pipe(gulp.dest(wwwroot + '/dist'));
});

gulp.task('assets:dist', function () {
    gulp.src(wwwroot + '/assets/**/*')
        .pipe(gulp.dest(wwwroot + '/dist/assets/'));
});

gulp.task('dev', ['styles', 'scripts', 'html:dist', 'assets:dist']);

gulp.task('dist', ['styles:dist', 'scripts:dist', 'scripts:minify', 'html:dist', 'assets:dist']);

/* Other Tasks */
gulp.task('clean', del.bind(null, [wwwroot + '/css/dist']));

gulp.task('watch', () => {
  refresh.listen();
  runSequence(['styles:watch', 'scripts:watch'], () => {
    browserSync.init({
        notify: false,
        proxy: 'localhost:18410'
    });
  });
});

gulp.task('default', function () {
    gulp.run('scripts', 'styles', 'html');

    gulp.watch('app/src/**', function (event) {
        gulp.run('scripts');
    })

    gulp.watch('app/css/**', function (event) {
        gulp.run('styles');
    })

    gulp.watch('app/**/*.html', function (event) {
        gulp.run('html');
    })
})
