var http = require('http')
var fs = require('fs');

var cheerio = require('cheerio');
var url = 'http://next.36kr.com/posts/collections/61?from=singlemessage&isappinstalled=1'

function filterChapters(html) {
    var $ = cheerio.load(html);
    var productItem = $('.product-item');
    var data = [];
    //console.log($(productItem[0]).find('.post-url').text());
    productItem.each(function(index,val){
        var _info = {};

        _info.link = $(val).find('.post-url').attr('href');
        _info.name = $(val).find('.post-url').text();
        _info.des = $(val).find('.post-tagline').text();

        data.push(_info);

    })

    return data;

}
function printCourseInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');

        item.videos.forEach(function (video) {
            console.log('[' + video.id + ']' + video.title + '\n');
        })
    })
}
http.get(url, function (res) {
    var html = ''
    res.on('data', function (data) {
        html += data;
    })
    res.on('end', function () {

        var courseData = filterChapters(html);
        //
        fs.open('./fs.json', 'w', function (err, fd) {
            var writeBuffer = new Buffer(JSON.stringify(courseData)),
                offset = 0,
                len = writeBuffer.length,
                filePostion = null;

            fs.write(fd, writeBuffer, offset, len, filePostion, function(err, readByte){
                console.log('写数据总数：'+readByte+' bytes' );
                // ==>写数据总数：27 bytes
            })
        })
        //printCourseInfo(courseData)
    })
}).on('error', function () {
    console.log('err');
});


