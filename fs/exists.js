/**
 * Created by admin-b on 2016/6/22.
 * 判断给定路径是否存在，然后不管结果如何，都会调用回调函数。
 */
var fs = require('fs');
fs.exists('./path.js',function(e){
    console.log(e);
})