var Promise = require('bluebird');

function test(name) {
    var i =0;
    return new Promise(function (resolve) {
        var timer = setInterval(function () {
            if(i<10){
                console.log(i);
                i++;
            }else {
                clearInterval(timer)
                resolve(i);
            }
        }, 500)
    })
}

test('aaron').then(function (t) {
    console.log(typeof t);
})