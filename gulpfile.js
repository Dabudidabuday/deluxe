'use strict';

const { src, watch, dest, series } = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");
const imagemin = require('gulp-imagemin');


function compileStyles() {
  return src("app/scss/index.scss")
    .pipe(sass())
    .pipe(gulpConcat("main.css"))
    .pipe(dest("dist/"));
}

function compressImg() {
  return src('assets/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(dest('assets/'));
}

function compileJs () {
  return src('app/js/*.js')
    .pipe(gulpConcat('main.js'))
    .pipe(dest('dist/'));
}

function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false,
  });
}

function watcher() {
  startBrowserSync();

  watch("app/scss/**/*.scss").on("change", series(compileStyles, browserSync.reload));
  watch("app/js/**/*.js").on("change", series(compileJs, browserSync.reload));
  watch("index.html").on("change", browserSync.reload);
}

exports.build = series(compileStyles, compileJs, compressImg);
exports.run = series(compileStyles, compileJs, watcher);