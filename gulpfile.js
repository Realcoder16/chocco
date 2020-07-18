const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');
 
sass.compiler = require('node-sass');
 
task('clean', () => {
   return src(`${DIST_PATH}/**/*`, { read: false })
     .pipe(rm())
  })
   
 
task('copy:html', () => {
 return src('index.html')
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
})


task('copy:sprite', () => {
   return src('icons/sprite.svg')
     .pipe(dest(`${DIST_PATH}/icons`))
     .pipe(reload({ stream: true }));
  })

  task('copy:menu-section', () => {
   return src('menu-section/*.png', '')
     .pipe(dest(`${DIST_PATH}/menu-section`))
     .pipe(reload({ stream: true }));
  })

  task('copy:decor', () => {
   return src('decor/*.*', '')
     .pipe(dest(`${DIST_PATH}/decor`))
     .pipe(reload({ stream: true }));
  })

  task('copy:reviews', () => {
   return src('reviews/*.jpg', '')
     .pipe(dest(`${DIST_PATH}/reviews`))
     .pipe(reload({ stream: true }));
  })

  task('copy:team', () => {
   return src('team/*.png', '')
     .pipe(dest(`${DIST_PATH}/team`))
     .pipe(reload({ stream: true }));
  })


 
task('styles', () => {
   return src([...STYLE_LIBS, 'src/styles/main.scss',  'layout/base.scss'])
     .pipe(sourcemaps.init())
     .pipe(concat('main.scss'))
     .pipe(sassGlob())
     .pipe(sass().on('error', sass.logError))
     //.pipe(px2rem())
     //.pipe(autoprefixer({
     //  browsers: ['last 2 versions'],
     //  cascade: false
    // }))
     // .pipe(gcmq())
     .pipe(cleanCSS())
     .pipe(sourcemaps.write())
     .pipe(dest(`${DIST_PATH}/src/styles`));
  });
   

     
  task('scripts', () => {
   return src([...JS_LIBS, 'js/*.js'])
   .pipe(sourcemaps.init())
   .pipe(concat('main.min.js', {newLine: ';'}))
   .pipe(babel({
      presets: ['@babel/env']
    }))
   .pipe(uglify())
   .pipe(sourcemaps.write())
   .pipe(dest(DIST_PATH))
   .pipe(reload({ stream: true }));
});

 
task('icons', () => {
   return src('src/images/icons/*.svg')
     .pipe(svgo({
       plugins: [
         {
           removeAttrs: {
             attrs: '(fill|stroke|style|width|height|data.*)'
           }
         }
       ]
     }))
     .pipe(svgSprite({
       mode: {
         symbol: {
           sprite: '../sprite.svg'
         }
       }
     }))
     .pipe(dest(`${DIST_PATH}/images/icons`));
  });
   



task('server', () => {
 browserSync.init({
     server: {
         baseDir: "./dist"
     },
     open: false
 });
});
 
watch('./src/styles/*.scss', series('styles'));
watch('index.html', series('copy:html'));
watch('./js/*.js', series('scripts'));
watch('./icons/*.svg', series('copy:sprite'));
watch('./decor/*', series('copy:decor'));
watch('./menu-section/*', series('copy:reviews'));
watch('./reviews/*.jpg', series('copy:team'));
watch('./team/*.png', series('copy:menu-section'));
 

task('default', series('clean', parallel('copy:html', 'copy:sprite', 'copy:menu-section', 'copy:decor', 'copy:reviews', 'copy:team', 'styles', 'scripts'), 'server'));