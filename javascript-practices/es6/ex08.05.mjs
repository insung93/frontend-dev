/**
 *  mixed with named export & unnamed export
 *  
 */

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

export { add, subtract };
// Enhanced Object Literals 를 사용해서 unamed export를 사용하였다.
// 12번 라인과 차이점을 이해하면 ES6 모듈 시스템 지원 import, export는 어느 정도 이해한 것이다.
export default { add, subtract };