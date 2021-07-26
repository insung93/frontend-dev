/**
 *  named export II
 *  
 *  exports(CommonJS)와 유사하다. 이 모듈을 import 할 때, destructuring 이 가능하다.
 */

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

// Enhanced Object Literal 이라기 보다는 named export 문법이다.
export { add, subtract };