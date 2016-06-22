/**
 * Created by admin-b on 2016/6/22.
 * 同步读取文件
 */

var fs = require('fs');

var text = fs.readFileSync('t.txt','utf8');

text.split(/\r?\n/).forEach(function(line){
    console.log(line);
})

