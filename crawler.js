var http = require('http')
var fs = require('fs');

var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    //[{
    //    chapterTitls:'',
    //    videos:[
    //        title:'',
    //        id:''
    //    ]
    //}]
    var courseData = [];
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('li a');

        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        //
        videos.each(function () {
            var videoTitle = $(this).text();
            var id = $(this).attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            })

        })

        courseData.push(chapterData)
    });
    return courseData;

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

        fs.open('./fs.json', 'a', function (err, fd) {
            var writeBuffer = new Buffer(JSON.stringify(courseData)),
                offset = 0,
                len = writeBuffer.length,
                filePostion = null;

            fs.write(fd, writeBuffer, offset, len, filePostion, function(err, readByte){
                console.log('写数据总数：'+readByte+' bytes' );
                // ==>写数据总数：27 bytes
            })
        })
        printCourseInfo(courseData)
    })
}).on('error', function () {
    console.log('err');
});


