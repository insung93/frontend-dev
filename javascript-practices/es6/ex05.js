/*
    5. Arrow Function
*/

const power = function (x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (numbers) {
    process.stdout.write(`${numbers}:${power(numbers)}\t`);
});


// ex 1

console.log();
numbers.forEach(function (numbers) {
    process.stdout.write(`${numbers}:${(x => x * x)(numbers)}\t`);
});

console.log();
numbers.forEach(
    function (numbers) {
        process.stdout.write(`${numbers}:${(x => {
            return x * x;
        })(numbers)}\t`);
    }
);

console.log();
numbers.forEach(
    function (numbers) {
        let result = (x=>{
            return x*x;
        })(numbers);
        process.stdout.write(`${numbers}:${result }\t`);
    }
);

console.log();
numbers.forEach(
    function (numbers) {
        let result = (x=>x*x)(numbers);
        process.stdout.write(`${numbers}:${result }\t`);
    }
);

const power2 = x=> x*x;
console.log();
numbers.forEach(
    function (numbers) {
        process.stdout.write(`${numbers}:${power2(numbers) }\t`);
    }
);

// ex3
console.log();
numbers.forEach(n=>
    process.stdout.write(`${n}: ${(x=>x*x)(n)} \t`)
    );

// ex4
console.log();
[5,3,15,1045,43,92].forEach(e=> {
    if(e%5 === 0) {
        process.stdout.write(`${e}\t`);
    }
});

// ex5 : this를 어휘적 바인딩(Lexical Binding)
console.log();
const dooly = {
    name : '둘리',
    friends : ['또치','마이콜','도우너','길동','희동이'],
    printFriends: function() {
        this.friends.forEach(f => {
            console.log(`${this.name}의 친구 ${f}`);
        });
    }
}
dooly.printFriends();