var gulp = require("gulp");
//webserver
var server = require("gulp-webserver");
//编译js预处理
var vinyl=require("vinyl-named");
var uglify=require("gulp-uglify");
var webpack = require("gulp-webpack");
/*css预处理*/
//var less=require("gulp-less")
var mincss=require("gulp-minify-css")
/*版本号*/
var rev=require("gulp-rev")
/*版本号*/
var revjs=[
	"dist/js/main.js",
	"dist/css/style.css"
]
gulp.task("rev",function(){
	gulp.src(revjs)
	.pipe(rev())
	.pipe(gulp.dest("dist/rev"))/*生成md5的随机串*/
})
/*编译js预处理*/
var entryjs = ['src/js/index.js'];
gulp.task("byjs",function(){
	gulp.src(entryjs)
	.pipe(vinyl())
	.pipe(webpack({
		output:{filename:"[name].js"}
	}))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
})
gulp.task("copy-html",function(){
	gulp.src("src/*.html")
	.pipe(gulp.dest("dist"))
})
/*css预处理*/
gulp.task("bycss",function(){
	gulp.src("src/css/*.css")
	.pipe(mincss())
	.pipe(gulp.dest("dist/css"))
})
gulp.task("watch",function(){
	gulp.watch("src/*.html",["copy-html"])
	gulp.watch("src/css/*.css",["bycss"])
	gulp.watch("src/js/*.js",["byjs"])
})
//webserver
gulp.task("webserver",function(){
	gulp.src("./")
	.pipe(server({
		livereload:true,
		port:8888,
		host:"localhost"
	}))
})
gulp.task("default",["webserver","watch"])
