/**
 * XMEN Gulp File
 */

//Include Gulp
var gulp = require('gulp');

//Include our plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');


//Move fonts
gulp.task('copyfonts', function() {
   gulp.src('public/lib/font-awesome/fonts/**/*.{ttf,woff,eof,svg}')
   	.pipe(gulp.dest('public/build/fonts'));
});


//Compile our sass
gulp.task('sass', function() {
	return gulp.src('public/scss/*.scss')
		.pipe(sass({ errLogToConsole: true }))
		.on('error', swallowError)
		.pipe(gulp.dest('public/build/css'));
});


//Watch task
gulp.task('watch', function() {
	gulp.watch('public/scss/**/*.scss', ['sass']);
});


//Default task
gulp.task('default', ['sass', 'copyfonts', 'watch']);


/**
 * Log the error
 */
function swallowError( error ) {
    console.log(error.toString());

    this.emit('end');
}
