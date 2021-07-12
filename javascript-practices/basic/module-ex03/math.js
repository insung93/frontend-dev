/* 
    exports 뒤에 꼭 이름을 사용해서 exports 해야 한다.
    named export
    * 객체 = require(m);
    *   var require = function(m) {
    *   module.exports = {};
    *   exports= module.exports;
    *   
    *   return module.exports;
    * }
    * 
*/
exports.PI = 3.14;
exports.min = function () {
    let min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(e => min = e < min ? e : min);
    return min;
};
exports.max = function () {
    let max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(e => max = e > max ? e : max);
    return max;
};
exports.sum = function() {
    let sum = 0;
    Array.from(arguments).forEach(e => sum += e);
    return sum;
};