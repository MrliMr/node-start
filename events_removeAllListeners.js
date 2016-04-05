/**
 * Created by admin-b on 2016/4/5.
 * fas
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();
var listener = function (foo, bar) {
    console.log('第一个监听事件，参数foo=' + foo + ',bar = ' + bar);
}
var listener2 = function (foo, bar) {
    console.log('第二个监听事件，参数foo=' + foo + ',bar = ' + bar);
}
ee.on('some_events',listener);
ee.on('some_events',listener2);
ee.on('other_events',function(){
    console.log('其它监听事件');
});

ee.removeAllListeners('some_events');
ee.emit('some_events','a','b');
ee.emit('other_events','a','b');

