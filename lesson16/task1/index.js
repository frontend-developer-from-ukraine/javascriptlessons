var arr = [];
for (var i = 0; i < 10; i++) {
    (function(i) {
        arr[i] = function() {
            return i;
        }
    })(i)
}
console.log(arr[5]())

var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    }
}
console.log(arr[5]())