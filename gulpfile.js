var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-server-livereload');

gulp.task('build',['js', 'less']);

gulp.task('js', () => {
    return browserify({
        entries: ["src/app.js"],
        debug: true
    })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('less', () => {
    return gulp.src('src/app.less')
        .pipe(sourcemaps.init())
        .pipe(less({compress: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.src('./')
        .pipe(livereload({
            livereload: true,
            directoryListing: true,
            open: true,
            defaultFile: 'index.html'
        }));
    gulp.watch('src/*.less', ['less']);
    gulp.watch('src/*.js', ['js']);
});
