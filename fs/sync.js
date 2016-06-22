/**
 * Created by admin-b on 2016/6/22.
 * 建立目录、写入文件、读取文件的同步版本
 */
var fs = require('fs');

fs.mkdirSync('./helloDirSync',0777);
fs.writeFileSync('./helloDirSync/message.txt', 'Hello Node');
var data = fs.readFileSync('./helloDirSync/message.txt','UTF-8');
console.log('file created with contents:');
console.log(data);