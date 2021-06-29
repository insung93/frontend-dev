# JavaScript

Stagement
- 하나 혹은 여러 개의 표현식이 모여 문장을 이룸
- 모든 표현식은 문장이 될 수 있음
- 문장의 끝에는 세미 콜론을 붙임
- 한 줄에 문장이 하나인 경우에는 세미 콜론을 생략가능(관례적으로 사용)
- 한 줄에 여러개의 문장을 적을 경우, 문장 구분을 해줘야함
- if(조건문), 반복문(for)문도 문장

식별자(Identifier)
- 코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열
- 대소문자 구분
- 대/소문자 $ _ 숫자 사용가능, 숫자로 시작은 안됨
- 예약어, 공백문자 사용 할 수 없음
- https://mothereff.in/js-variables

변수와 상수
- 변수 : let
- 상수 : const 
- 유효범위(scope) 블록 스코프 (  {  }  )

var의 유효 범위
- 함수 스코프
- 함수에서만 함수에서만 구분 되기 때문에 블록 스코프를 무시
- Hoisting : 아래에 있는 선언을 끌어올리다.
```javascript```
function dooly() {
    console.log("dooly");
}
dooly();
micol();
function micol() {
    console.log("micol");
}


```javascript```
name = "dooly1";
name+="dooly2";
console.log(name);
var name;


```javascript```
//var name;
console.log(name);
name = "dooly2";
console.log(name);
var name = "dooly1";
console.log(name);