const gulp = require('gulp');

gulp.series(
  require('./updateDNA.js').updateDNA
)();
