const { src, dest, watch} = require("gulp");
const minifyJS = require("gulp-uglify");
const minifyCss = require("gulp-clean-css");

const bundleJS = () => {
    return src("./dist/script.js").pipe(minifyJS()).pipe(dest("./dist/min"));
};

const bundleCss = () => {
    return src("./dist/main.css").pipe(minifyCss()).pipe(dest("./dist/min"));
};

const devWatch = () => {
    watch("./dist/script.js", bundleJS);
};

exports.bundleJS = bundleJS;
exports.bundleJS = bundleCss;
exports.devWatch = devWatch;


