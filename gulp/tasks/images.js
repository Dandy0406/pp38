const gulp = require('gulp');
const size = require('gulp-size');
const webp = require('gulp-webp');
const paths = require('../paths');


const images = () => {
  return gulp
    .src(paths.src.images)
    
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.build.images))
    .pipe(webp())
    .pipe(gulp.dest(paths.build.images));
};

module.exports = images;