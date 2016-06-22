/**
 * Created by admin-b on 2016/6/22.
 * 读取文件内容
 */
var fs = require('fs');
//fs.readFile('./helloDir/msg.txt','utf8',function(err,data){
//    if(err) throw err;
//    console.log(data);
//})

for (var i = 1; i <= 2; i++) {
    //fs.readFileSync('./helloDir/' + i + '.txt', 'utf8', function (err, data) {
    //    console.log(data);
    //    // do something with the file
    //});

    console.log(fs.readFileSync('./helloDir/' + i + '.txt', 'utf-8'));
}