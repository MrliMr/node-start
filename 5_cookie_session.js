var express = require('express');
var session = require('express-session');
var app = express();
app.listen(5000);
app.use(session({
    secret:'1',
    cookie:{maxAge:60*1000}
}));
app.get('/',function(req,res){
    // 检查 session 中的 isVisit 字段
    // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    if(req.session.isVisit) {
        req.session.isVisit++;
        console.log(req.session);
        res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
    } else {
        req.session.isVisit = 1;
        res.send("欢迎第一次来这里");
        console.log(req.session);
    }
})
