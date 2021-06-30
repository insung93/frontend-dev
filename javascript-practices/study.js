// JavaScript

// Stagement
// - 하나 혹은 여러 개의 표현식이 모여 문장을 이룸
// - 모든 표현식은 문장이 될 수 있음
// - 문장의 끝에는 세미 콜론을 붙임
// - 한 줄에 문장이 하나인 경우에는 세미 콜론을 생략가능(관례적으로 사용)
// - 한 줄에 여러개의 문장을 적을 경우, 문장 구분을 해줘야함
// - if(조건문), 반복문(for)문도 문장

// 식별자(Identifier)
// - 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
// - 대소문자 구분
// - 대/소문자 $ _ 숫자 사용가능, 숫자로 시작은 안됨
// - 예약어, 공백문자 사용 할 수 없음
// - https://mothereff.in/js-variables

// 변수와 상수
// - 변수 : let
// - 상수 : const 
// - 유효범위(scope) 블록 스코프 (  {  }  )

// var의 유효 범위
// - 함수 스코프
// - 함수에서만 함수에서만 구분 되기 때문에 블록 스코프를 무시
// - Hoisting : 아래에 있는 선언문(만)을 끌어올리다.

function a() {
    console.log("dooly");
}
a();
b();
function b() {
    console.log("micol");
}

name1 = "dooly1";
name1 += "dooly2";
console.log(name1);
var name1;

// hoisting : 선언부만 위로 올라옴
// var name;
console.log(name2);
name2 = "dooly2";
console.log(name2);
var name2 = "dooly1";
console.log(name2);


// 자바스크립트 자료형
// - 동적 타이핑 : 느슨한 타입언어, 동적언어로 변수의 타입을 미리 선언할 필요가 없다. 처리되는 과정에서 자동으로 파악될 것이다. 변수가 가지는 고정타입이 없다.
// - 기본타입(Primitive type) : Boolean, Number, String, undefined
// - 객체타입(Object type) : new 생성자 함수
// - function type

// Boolean
// - true, false
// true = 1,'dooly', {}, []
// false = 0, '', null, undefined, NaN
let c = true;
let d = false;
console.log(c, typeof (c));
console.log(d, typeof (d));

let e = new Boolean(false);
console.log(e, typeof (e));
if (e) {
    console.log(e)  // e는 Object이기 때문에 출력됨
}

let f = Boolean(false);
console.log(f, typeof (f));
if (f) {
    console.log(f)  // e는 Object이기 때문에 출력됨
}

// null vs undefined
let g = null;
console.log(g, typeof (g));
let h;
console.log(h, typeof (h));
h = undefined;
console.log(h, typeof (h));
console.log(g == h);
console.log(g === h);

// Number
let i = 10;
console.log(i, typeof i);
let j = 10.10;
console.log(j, typeof j);

let k = NaN;
console.log(k, typeof k);

let l = Number('dooly');
console.log(l, typeof l);

let m = Number('10');
console.log(m, typeof m);

//String
let n = 'dooly';
console.log(n, typeof n);

let o = 'dooly' + "1";
console.log(o, typeof o);

let p = o + n
console.log(p);

let q = `${o}dooly`;
console.log(q);

// Symbol
let s = Symbol();
let t = Symbol(1);
let u = Symbol("dooly");
let v = Symbol("dooly");

console.log(s, typeof s);
console.log(u === v);

// 반복문
for( let i of [1,2,3]) {
    console.log(i);
}
// 원했던 형태로 출력이 안될수도 있음
Object.prototype.test = function() {};
for ( let i in {a:1, b:2, c:3}) {
    console.log(i);
}