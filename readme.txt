一 ：
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
    htmlmin = require('gulp-htmlmin');
    imagemin=require('gulp-imagemin'),
gulp.task('minifycss', function() {
    return gulp.src('css/*.css')      //压缩的文件
      
        .pipe(minifycss())   //执行压缩
          .pipe(gulp.dest('minified/css')) ; //输出文件夹
});
gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('minified/js'));  //输出
});
// gulp.task('clean', function(cb) {
//     del(['minified/css', 'minified/js'], cb)
// });
gulp.task('default', function() {
    gulp.start('minifycss', 'minifyjs');
});



   gulp.task('images', function () {
    gulp.src('img/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('minified/img'));
});


gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('minified/html'));
});
二：
angluar练习


三 在：https://github.com/894628871/ninght.git