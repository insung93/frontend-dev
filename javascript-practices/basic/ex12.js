// Array 확장 : List 메서드 추가 (prototype 확장)

Array.prototype.insert = function (index, values) {
    if (values instanceof Array) {
        // for (var i = 0; i < values.length; i++) {
        //     this.splice(index++, 0, values[i]);
        // }
        var _this = this;
        values.forEach(function (e) {
            // console.log(this);   // 함수 안에서의 this와 밖에서의 this 가 다름
            _this.splice(index++, 0, e);
        });
    } else {
        this.splice(index, 0, values);
    }
}
Array.prototype.remove = function (index) {
    this.splice(index, 1);
}

// 리스트로 사용하기
var a = [1, 2, 4];

console.log(a);
a.insert(2, 3)
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); // [1, 2, 'a', 'b', 'c', 3]
console.log(a);

// 모든 함수 객체는 call, apply이라는 메소드가 있음
// call - 함수 내부의 this를 binding, parameter 넘길 수 있음
// apply - 함수 내부의 this를 binding, parameter 넘길 수 없음

var f = function (param) {
    console.log(this + " : " + param);
}

o = {name : "dooly"};
f.call(o, "aaa@aaa.aaa");
f.apply(o);