/**
 * Created by admin-b on 2016/6/22.
 * fas
 */
var fs = require(fs);

fs.readdir('/', function (err, files) {
    if (err) {
        console.log(err);
        return;
    }

    var count = files.length;
    console.log(count);
    //var results = {};
    //files.forEach(function (filename) {
    //    fs.readFile(filename, function (data) {
    //        results[filename] = data;
    //        count--;
    //        if (count <= 0) {
    //            // 对所有文件进行处理
    //        }
    //    });
    //});
});