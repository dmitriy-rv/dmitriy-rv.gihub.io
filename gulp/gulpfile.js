var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {

  browserSync.init({
		server: "../site"
	});

  gulp.watch ('../scss/**/*.scss',['styles']);
  gulp.watch("../site/*.html").on('change', browserSync.reload);

});

gulp.task('styles', function(){
	gulp.src('../scss/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(csso())
	    .pipe(autoprefixer({
	    	browsers: ['last 2 versions']
	    }))
	    .pipe(gulp.dest('../site/css'))
	    .pipe(browserSync.stream());
});