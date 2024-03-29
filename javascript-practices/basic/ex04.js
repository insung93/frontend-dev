// 변수의 범위(scope)
// 1. 자바스크립트는 어휘에서 범위를 알 수 있는 정적 범위(Lexical Scope)이다.
// 2. EC6 이전에는 자바스크립트에는 자바와 같은 Block Scope은 지원하지 않았다.
//    EC6 이전에는 함수 범위(Function Scope)만 지원 했었다.
//    function의 {} 안에서 변수 안에 var 키워드를 하면 함수 범위를 가지게 된다.
//    만일, var 키워드 없이 변수를 정의하면 전역 범위를 가지게 된다.(Hoisting)
// 3. EC6 에서는 새롭게 Block Scope를 가지게 하는
//    1. let : 변수
//    2. const : 상수
//    두 키워드를 지원한다.

var i = 10;
var f = function() {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
}

{
    let x = 100;
    const PI = 3.14
    x = 100;
    // PI=0;
    // Assignment to constant variable
}
// console.log(x);
// x is not defined

f();
console.log(i);
console.log(j);