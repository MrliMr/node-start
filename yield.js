//var arr = [1, [2, [3, 4]], [5, 6]];
//
//var t = [];
//
//function flat(arr) {
//    for (var i = 0; i < arr.length; i++) {
//        if (typeof arr[i] === "number") {
//            t.push(arr[i]);
//        } else {
//            flat(arr[i])
//        }
//    }
//}
//flat(arr)
//console.log(t);
//
//

//var arr = [1, [2, [3, 4]], [5, 6]];
//
//var flat = function* (a) {
//    var length = a.length;
//    for (var i = 0; i < length; i++) {
//        var item = a[i];
//        if (typeof item !== 'number') {
//            yield* flat(item);
//        } else {
//            yield item;
//        }
//    }
//}
//
//for(var f of flat(arr)){
//
//    console.log(typeof f);
//}
var t = {
    a: function *() {
        yield 'this is a'
    },
    b: function* () {
        yield 'this is a'
    },
}

for (var i of t) {
    console.log(i);
}
