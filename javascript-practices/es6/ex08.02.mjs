/**
 *  unamed export with default
 *  
 *  이름 없는 객체를 하나를 export 하는 것이다. 따라서 module.exports(CommonJS)와 차이점이 있다.
 */

export default {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
}