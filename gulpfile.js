const Gulp = require("gulp");
const Watch = require("gulp-watch");

Gulp.task("build", () => {
	const Sourcemaps = require("gulp-sourcemaps"),
		Postcss = require("gulp-postcss"),
		CustomProperties = require("postcss-custom-properties"),
		Nested = require("postcss-nested"),
		Import = require("postcss-import"),
		Autoprefixer = require("autoprefixer"),
		Rename = require("gulp-rename"),
		Cssnano = require("cssnano"),
		CustomMedia = require("postcss-custom-media");

	const PreProc = [Import, CustomProperties, Nested, CustomMedia],
		PostProc = [Autoprefixer, Cssnano];
	return Gulp.src("./css/*.css")
		.pipe(Sourcemaps.init())
		.pipe(Postcss(PreProc))
		.pipe(Postcss(PostProc))
		.pipe(Rename({ suffix: ".min" }))
		.pipe(Sourcemaps.write("."))
		.pipe(Gulp.dest("./dist"));
});

Gulp.task("watch", () => Gulp.watch("./css/*.css", Gulp.task("build")));
