var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('scripts', function () {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/bootstrap/bootstrap.min.js',
        'app/libs/magnific-popup/dist/bootstrap/bootstrap.magnific-popup.min.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});
gulp.task('css-libs', ['sass'], function () {
    return gulp.src(['app/css/libs.css', 'app/css/bootstrap-grid.min.css'])
        .pipe(cssnano())
        .pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});
gulp.task('browser-sync', function () {
   browserSync({
    server: {
        baseDir: 'app'
    },
    notify: false
   });
});
gulp.task('clean', function () {
    return del.sync('docs');
});
gulp.task('clear', function () {
    return cache.clearAll();
});
gulp.task('img', function () {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('docs/img'));
});
gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function () {
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/animated.css',
        'app/css/libs.min.css',
        'app/css/slick-theme.css',
        'app/css/slick.css',
        'app/css/bootstrap-grid.min.css'
    ])
        .pipe(gulp.dest('docs/css'));
    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('docs/js'));
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('docs'));
});