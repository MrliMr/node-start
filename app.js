/**
 * Created by admin-b on 2016/3/25.
 * fas
 */
var EventEmitter = require('events').EventEmitter
var ee = new EventEmitter();

ee.on('some_events', function (foo, bar) {
    console.log();
})