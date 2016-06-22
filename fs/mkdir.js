/**
 * Created by admin-b on 2016/6/22.
 * 新建目录
 */
var fs = require('fs');
fs.mkdir('./helloDir',0777,function(err){
    if(err) throw err;
})
