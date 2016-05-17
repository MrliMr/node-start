/**
 * Created by admin-b on 2016/4/8.
 * fas
 */
var express = require('express');
var app = express();
app.use(express.bodyParser());
app.get('/',function(req,res){
    res.sendfile(__dirname+'/bodyparser.html')
});
app.post('/', function (req,res) {
    console.log(req.body);
    res.send(req.body);
})
app.listen(8520);