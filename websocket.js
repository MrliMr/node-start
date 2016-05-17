/**
 * Created by admin-b on 2016/4/6.
 * fas
 */
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.status(200).send('欢迎来到汇智网学习！');
});
app.get('/index',function(req,res){
    res.sendFile('index.html',{root:__dirname});
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.emit('message','连接成功123');
    socket.on('message',function(data){
        //收到消息
        console.log(typeof data);
    });
    socket.on('disconnect',function(){
        console.log('客户端断开');
    });
});


server.listen(80);