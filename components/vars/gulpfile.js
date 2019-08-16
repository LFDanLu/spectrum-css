/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const gulp = require('gulp');
const logger = require('gulplog');
const fs = require('fs');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const del = require('del');
const path = require('path');

function clean() {
  return del('dist/*');
}

function prepareBuild(cb) {
  var dir = 'dist';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  cb();
}


function concatGlobals() {
  let globals = [
    'spectrum-animationGlobals.css',
    'spectrum-colorGlobals.css',
    'spectrum-dimensionGlobals.css',
    'spectrum-fontGlobals.css',
    'spectrum-global.css',
    'spectrum-staticAliases.css'
  ];

  return gulp.src(globals.map(fileName => `css/${fileName}`))
    .pipe(replace(':root', function (match){
      return '.spectrum';
    }))
    .pipe(concat('spectrum-global.css'))
    .pipe(gulp.dest('dist/'));
}

function copySources() {
  let classMap = {
    'spectrum-darkest.css': '.spectrum--darkest',
    'spectrum-dark.css': '.spectrum--dark',
    'spectrum-large.css': '.spectrum--large',
    'spectrum-light.css': '.spectrum--light',
    'spectrum-lightest.css': '.spectrum--lightest',
    'spectrum-medium.css': '.spectrum--medium'
  };

  return gulp.src(Object.keys(classMap).map(fileName => `css/${fileName}`))
    .pipe(replace(':root', function (match){
      return classMap[path.basename(this.file.path)];
    }))
    .pipe(gulp.dest('dist/'));
}

const insert = require('gulp-insert');

function concatAll() {
  return gulp.src([
    'css/*.css',
    'css/components/*.css'
  ])
    .pipe(replace(/:root {/, function(match) {
      return `/* ${path.basename(this.file.path)} */`;
    }))
    .pipe(replace(/}/, ''))
    .pipe(concat('index.css'))
    .pipe(insert.prepend(':root {'))
    .pipe(insert.append('}\n'))
    .pipe(gulp.dest('dist/'));
}

function concatComponents() {
  return gulp.src([
    'css/components/*.css'
  ])
    .pipe(replace(/:root {/, function(match) {
      return `/* ${path.basename(this.file.path)} */`;
    }))
    .pipe(replace(/}/, ''))
    .pipe(concat('index.css'))
    .pipe(insert.prepend(':root {'))
    .pipe(insert.append('}\n'))
    .pipe(gulp.dest('dist/components/'));
}

function copyMetadata() {
  return gulp.src('css/spectrum-metadata.json')
    .pipe(gulp.dest('dist/'));
}

let build = gulp.series(
  clean,
  prepareBuild,
  gulp.parallel(
    copyMetadata,
    concatGlobals,
    copySources
  ),
  gulp.parallel(
    concatAll,
    concatComponents
  )
);

exports.clean = clean;
exports.default = build;
exports.build = exports.buildLite = build;
