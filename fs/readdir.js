/**
 * Created by admin-b on 2016/6/22.
 * fas
 */
var fs = require('fs');

fs.readdir('./', function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    var count = files.length;
    var results = {};
    files.forEach(function (file) {
        fs.stat('./' + file, function (err, stats) {
            if (stats.isFile()) {
                console.log("%s is file", file);
            }
            else if (stats.isDirectory ()) {
                console.log("%s is a directory", file);
            }
        })
        //fs.readFile('./'+filename, 'utf8',function (err,data) {
        //    console.log(data);
        //    //results[filename] = data;
        //    //count--;
        //    //if (count <= 0) {
        //    //    // 对所有文件进行处理
        //    //    console.log(results);
        //    //}
        //});
    });
});
