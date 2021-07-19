# 테스트

## 자바스크립트 단위 테스트 도구
1. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.
2. Java : JUnit == JavaScript: JSUnit(개발 중지, 2009년)
3. JSUnit 프로젝트 ---> Jasmine (2010년 ~ 현재)
    - 자체 assertion 을 가지고 있다.
    - BDD 기반의 개발 표준 테스팅에 맞는 문법을 작성할 수 있다.
4. DOM 직접 조작 애플리케이션(jQuery 기반) -> QUnit
    - 세팅하기 쉽고 간편하게 테스트
    - Promise 기반 비동기 테스트
5. Node 기반 백엔드 애플리케이션 테스트 -> Mocha
    - Promise 기반 비동기 테스트
    - 자체 Assertion 이 없다
    - 대신, Node 코어 모듈 중에 assert 모듈 뿐만 아니라,
      다양한 외부 assertion 라이브러리(chai, should,js, expect.js)를 다양하게 지원한다
    - 유연하고 확장성이 좋다
6. Jasmine, QUnit, Mocha**, Jest(React 개발 테스트 도구)

## Mocha 설치
```bash
$ npm i -D mocha        # 설치
$ npx mocha --version   # 9.0.2 버전확인
```

## Mocha 테스트 케이스 모듈 작성
[ex01.js]
```javascript
exports.hello = () => 'Hello World';


```

[test/ex01.js]
```javascript
const assert = require('assert');
const { hello } = require('../ex01');

describe("hello()", function() {      // 람다식 사용 x
    it('"Hello World" 문자열을 반환해야 함', function() {
        assert.strictEqual(hello(), "Hello World");
    });
});
```

### 테스트 수행 1 ( 개별적 )
```bash
$ npx mocha test/ex01
```

### 테스트(성공)

>  hello()
>    ✔ "Hello World" 문자열을 반환해야 함
>
>
>  1 passing (5ms)


### 테스트(실패)
>
>  hello()
>   1) "Hello World" 문자열을 반환해야 함
>
>
>  0 passing (8ms)
>  1 failing
>
>  1) hello()
>       "Hello World" 문자열을 반환해야 함:
>
>      AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
>+ actual - expected
>
>+ 'Hello World'
>- 'Hello Wolrd'
>           ^
>      + expected - actual
>
>      -Hello World
>      +Hello Wolrd
>
>      at Context.<anonymous> (test\ex01.js:6:16)
>      at processImmediate (node:internal/timers:464:21)    


### 테스트 수행 2 ( 일괄적 )
```bash
$ npx mocha
```

### 테스트 수행 3 ( npm scripts stage 추가 )
1. package.json 에 scripts test stage를 추가
```json
.
.
  "scripts": {
    "test": "npx mocha"
  }
.
.
```

## Assertion 기초
[ex02.js]
```javascript
exports.add = (a, b) => a + b;
exports.na = () => [2, 4, 6];
exports.X = function() { }
```

[ex02.test01.js]
```javascript
const assert = require('assert');
const { add } = require('./ex02');

try {   // assert는 try catch 꼭 사용하기
    assert.equal(add(10, 20), 30);          // ==
    assert.strictEqual(add(10, 20), 20);    // ===
    console.log('ok');
} catch(err) {
    console.log(`fail : ${err.message}`);
}
```
Strict Mode(```===```, ```!==```)로 assertion 하여야한다
1. equal(deprecteds) -> strictEqual
2. notEqual(deprecteds) -> strictNotEqual
// 동일성 비교
3. deepEqual(deprecteds) -> strictDeepEqual
4. notDeepEqual(deprecteds) -> notStrictDeepEqual
// 동질성 비교(내용 비교)