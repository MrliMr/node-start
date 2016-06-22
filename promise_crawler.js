var http = require('http');
var Promise = require('bluebird');
var fs = require('fs');

var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
var url = 'http://www.imooc.com/learn/348';
var videoIds = [348,259,197,134,75];

function filterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title = $('#main .path span').text().trim();
    var number = $($('.statics .static-item')[2]).find('span strong').text();

    //var courseData = {
    //    title: title,
    //    number: number,
    //    videos: [{
    //        chapterTitls: '',
    //        videos: [{
    //            title: '',
    //            id: ''
    //        }]
    //    }]
    //};
    var courseData = {
        title: title,
        number: number,
        videos: []
    };
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text().trim();
        var videos = chapter.find('li a');

        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        //
        videos.each(function () {
            var videoTitle = $(this).text().trim();
            var id = $(this).attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: id
            })

        })

        courseData.videos.push(chapterData)
    });
    return courseData;

}
function printCourseInfo(coursesData) {
    //console.log(coursesData[0].videos[0]);
    coursesData.forEach(function (courseData) {
        console.log(courseData.number + '人' + courseData.title + '\n');
    })
    coursesData.forEach(function (courseData) {
        console.log('###' + courseData.title + '\n');
        courseData.videos.forEach(function (item) {
            var chapterTitle = item.chapterTitle;
            console.log(chapterTitle + '\n');
            item.videos.forEach(function (video) {
                console.log('[' + video.id + ']' + video.title + '\n');
            })
        })
    })
}

function getPageAsync(url) {
    return new Promise(function (resolve, reject) {
        http.get(url, function (res) {
            var html = ''
            res.on('data', function (data) {
                html += data;
            })
            res.on('end', function () {
                resolve(html);
            })
        }).on('error', function (e) {
            reject(e);
            console.log('获取课程数据出错');
        });
    })
}

var fetchCourseArray = [];
videoIds.forEach(function (id) {
    fetchCourseArray.push(getPageAsync(baseUrl + id));
})
Promise
    .all(fetchCourseArray)
    .then(function (pages) {
        var coursesData = [];
        pages.forEach(function (html) {
            var courses = filterChapters(html);
            coursesData.push(courses)
        })

        coursesData.sort(function (a, b) {
            return a.number < b.number
        })
        printCourseInfo(coursesData);
        fs.open('./fs.json', 'w', function (err, fd) {
            var writeBuffer = new Buffer(JSON.stringify(coursesData)),
                offset = 0,
                len = writeBuffer.length,
                filePostion = null;

            fs.write(fd, writeBuffer, offset, len, filePostion, function(err, readByte){
                console.log('写数据总数：'+readByte+' bytes' );
                // ==>写数据总数：27 bytes
            })
        })
    })
