var gulp = require('gulp')
var useref = require('gulp-useref')
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')

gulp.task('compress', function(){
	var assets = useref.assets()
	gulp.src('./public/app/index.html')
		.pipe(assets)
		.pipe(gulpif('.public/app/scripts/**/*.js', uglify()))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('./public/dist'))
})