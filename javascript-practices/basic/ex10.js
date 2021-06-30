/*
    배열( Array)
*/
// 1. 생성자 함수
console.log("===생성자 함수===================")
var a1 = new Array();
console.log(typeof (a1), a1 instanceof Array);

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 배열의 크기는 동적으로 늘어난다.

var a2 = new Array(10);
a2[0] = 0;
console.log(a2.length);
a2[10] = 10;
console.log(a2.length);
a2[11] = 11;
a2[12] = 12;
console.log(a2[0], a2[1], a2.length) // 배열 요소에 값을 지정하지 않으면 undefined;



// 초기값을 지정할 수 있다.
var a3 = new Array(0, 1, 2, 3, 4);
console.log(a3);
console.log(a3.length);

// Array VS Object
console.log("===Array VS Object=============================")

console.log("===Array=============================")
a4 = [];
a4[0] = 0;
a4["1"] = 1;
a4["name"] = "둘리";
a4["5"] = 5;
console.log(a4["0"], a4[1], a4["name"], a4.length);

for (prop in a4) {
    console.log("prop : " + prop + " : " + a4[prop] + " : " + typeof (prop));
}

a4.forEach(function (e) {
    console.log("e : " + e);
});

console.log("\n===Object=============================")
o4 = {};
o4[0] = 0;
o4["1"] = 1;
o4["name"] = "마이콜";
console.log(o4["0"], o4[1], o4["name"], o4.length);

for (prop in o4) {
    console.log("prop : " + prop + " : " + o4[prop] + " : " + typeof (prop));
}

// 리터럴
console.log("===리터럴=============================")


var a5 = [function () {
    console.log("hello");
}, 20, "javascript", true, {
    email: "dooly@gmail.com",
    name: "dooly"
}, null, undefined
];

console.log(a5.length);

for (var i = 0; i < a5.length; i++) {
    console.log(a5[i]);
}
console.log(a5[0]());