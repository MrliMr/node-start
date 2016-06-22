/**
 * Created by admin-b on 2016/4/7.
 * fas
 */
var app = require('express')();
var multer = require('multer');

var storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    },
})

//var upload = multer({ storage: storage,})

var upload = multer({dest:'uploads/',storage:storage})

app.listen(5022);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/multer.html');
});
app.post('/', upload.single('avatar'), function (req, res, next) {
    console.log(req.file);
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})