/**
 * Created by admin-b on 2016/3/25.
 * fas
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

/*
 EventEmitter.once(event, listener)  为事件注册一次性监听，触发一次后移除监听
 参数1：event  字符串，事件名
 参数2：回调函数
 */
ee.once('some_events', function(foo, bar) {
    console.log("第1个监听事件,参数foo=" + foo + ",bar="+bar );
});


console.log('第一轮');
ee.emit('some_events', 'Wilson', 'Zhong');

console.log('第二轮');
var isSuccess =  ee.emit('some_events', 'Wilson', 'Zhong');
console.log(isSuccess);