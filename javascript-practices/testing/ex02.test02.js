const assert = require('assert').strict;
const { add } = require('./ex02');

try {   // assert는 try catch 꼭 사용하기
    assert.equal(add(10, 20), '30');
    console.log('ok');
} catch (err) {
    console.log(`fail : ${err.message}`);
}