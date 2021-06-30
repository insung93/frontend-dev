/*
    6. Destructuring(구조분해)
*/

// ex01 - basic
const user = {
    firstName: "둘",
    lastName: "리",
    email: "dooly@gmail.com"
};

({ firstName, lastName } = user);
console.log(firstName, lastName);

// ex02 - Default value
const goods = {
    name: "TV",
    price: 10000,
    stockCount: 30
};

let { name, price, soldCount = 0, stockCount = 0 } = goods;
console.log(name, price, soldCount, stockCount);

// ex03 - 구조 분해해야 할 객체의 속성과 변수 이름이 다를 때
const person = {
    name: "두우우울리",
    country: "korea"
};

let { name: fullName, country: place } = person;
console.log(fullName, place);

// ex04 - 내부 객체(Nested Object) 의 구조 분해
const student = {
    name: "둘리",
    age: 10,
    scores: {
        math: 90,
        korean: 70,
        science: 100
    }
};

const {
    name: studentName,
    scores: {
        math = 0,
        korean = 0,
        science = 0,
        music = 0
    }
} = student;

console.log(`${studentName}의 성적 \n 수학 : ${math}, 국어 : ${korean}, 과학 : ${science}, 음악 : ${music}`);

// ex05 - 함수의 파라미터
var averageScore = function ({
    name: studentName,
    scores: {
        math = 0,
        korean = 0,
        science = 0,
        music = 0
    }
}) {
    console.log(`${studentName}의 평균은 ${(math + korean + science + music) / 4}점 입니다.`)
}
averageScore(student); // 출력 :  둘리의 평균은 65점 입니다.

// ex07 - 배열의 구조분해
const color = [155, 200, 87];
[red, green, blue] = color;
console.log(red, green, blue);

// ex08 - 배열의 구조분해 디폴트 값
[red = 0, green = 0, blue = 0, alpha = 0] = color;
console.log(red, green, blue, alpha);

// ex09 - skip values;
let [, , colorOfBlue = 0] = color;
console.log(colorOfBlue);

// ex10 - swap values;
x = 10;
y = 20;
console.log(x, y);
let tmp = x;
x = y;
y = tmp;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// ex11 - ...arr : array spread operator
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Rainbow", rainbow);
console.log("Colors of Rainbow", ...rainbow);

// red:orange:yellow:green-------
var f = function(...colors) {
    // cf
    // console.log(arguments);
    return colors.join(":");
}
// f(...otherColors);
console.log();
console.log(f('red','yellow','blue'));

s = ((...colors) => colors.join(":"))('red','yellow','blue');
console.log(s);


// a = [...for]
// for(var i =0; i< a.length; i++) {

// }
// a.forEach(function(){

// });