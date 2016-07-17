/**
 * 文件监听
 * @type {exports|module.exports}
 */

var fs = require('fs');

fs.watchFile('./testFile.txt', function (curr, prev) {
    console.log(curr);
    console.log(prev);
})