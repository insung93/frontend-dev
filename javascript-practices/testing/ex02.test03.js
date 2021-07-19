const assert = require('assert');
const { na } = require('./ex02');

try {   // assert는 try catch 꼭 사용하기
    assert.deepEqual(na(), [2, 4, 6], `fail : deepEqual `);
    assert.equal(na(), [2, 4, 6], `fail : equal `);
    console.log('ok');
} catch (err) {
    console.log(err.message);
}