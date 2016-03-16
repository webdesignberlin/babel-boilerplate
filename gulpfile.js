var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var rimraf = require('rimraf');

var path = require('path');

var paths = {
	es6: ['src/*.js','src/**/*.js'],
	es5: 'dist',
	// Must be absolute or relative to source map
	sourceRoot: path.join(__dirname, 'src'),
};
gulp.task('clean', function(cb) {
  rimraf(paths.es5, cb);
});

gulp.task('babel', ['clean'], function() { // (A)
	return gulp.src(paths.es6)
		.pipe(sourcemaps.init()) // (B)
		.pipe(babel({presets:['es2015']}))
		.pipe(sourcemaps.write('.', // (C)
			{
				sourceRoot: paths.sourceRoot
			}))
		.pipe(gulp.dest(paths.es5));
});
gulp.task('watch', function() { // (D)
	gulp.watch(paths.es6, ['babel']);
});
gulp.task('default', ['watch']); // (E)
