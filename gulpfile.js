const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const include = require('gulp-include');
const htmlbeautify = require('gulp-html-beautify');

function pages() {
  return src('app/pages/*.html')
    // .pipe(newer('app')) // Проверяем, изменился ли файл
    .pipe(include({
      includePaths: 'app/components'
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function images() {
  return src(['app/images/src/*.*'])
    .pipe(newer('app/images'))


    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(webp())

    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(imagemin())

    .pipe(dest('app/images'))
}

function styles() {
  return src([
    'app/css/bootstrap-grid.min.css',
    'app/css/bootstrap-utilities.min.css',
    'app/scss/style.scss'
  ])
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions']
    }))
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src('app/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify({
      mangle: false,
      compress: false,
      output: { beautify: true }
    }))
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
  watch(['app/scss/*.scss'], styles)
  watch(['app/images/src'], images)
  watch(['app/js/main.scss'], scripts)
  watch(['app/components/*', 'app/pages/*'], pages)
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
  return src('dist')
    .pipe(clean())
}

function beautify() {
  return src('app/*.html')
  .pipe(htmlbeautify(
    {
      indent_size: 2,
      max_preserve_newlines: 0,
  }
  ))
  .pipe(dest('dist'))
}

function building() {
  return src([
    'app/css/style.min.css',
    'app/images/**/*.*',
    '!app/images/src/*.*',
    'app/js/main.min.js',
    'app/**/*.html'
  ], { base: 'app' })
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.pages = pages;
exports.images = images;
exports.scripts = scripts;
exports.beautify = beautify;
exports.watching = watching;

exports.build = series(cleanDist, building, beautify);
exports.default = parallel(styles, images, scripts, pages, watching);