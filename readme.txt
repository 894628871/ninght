һ ��
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');
    htmlmin = require('gulp-htmlmin');
    imagemin=require('gulp-imagemin'),
gulp.task('minifycss', function() {
    return gulp.src('css/*.css')      //ѹ�����ļ�
      
        .pipe(minifycss())   //ִ��ѹ��
          .pipe(gulp.dest('minified/css')) ; //����ļ���
});
gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))    //�ϲ�����js��main.js
        .pipe(gulp.dest('minified/js'))    //���main.js���ļ���
        .pipe(rename({suffix: '.min'}))   //renameѹ������ļ���
        .pipe(uglify())    //ѹ��
        .pipe(gulp.dest('minified/js'));  //���
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
        removeComments: true,//���HTMLע��
        collapseWhitespace: true,//ѹ��HTML
        collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        minifyJS: true,//ѹ��ҳ��JS
        minifyCSS: true//ѹ��ҳ��CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('minified/html'));
});
����
angluar��ϰ


�� �ڣ�https://github.com/894628871/ninght.git