/**
 * Created by admin-b on 2016/6/22.
 * 写入文件
 */
var fs = require('fs')
fs.writeFile('./helloDir/msg.txt','hello Node',function(err){
    if(err) throw err;
    console.log('文件写入成功');
})
