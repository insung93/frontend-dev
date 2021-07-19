const assert = require('assert');
const { X } = require('./ex02');

try {   // assert는 try catch 꼭 사용하기
    const a = new X();
    const b = new X();
    const c = a;
    assert.equal(a, c, `fail : a === c `);
    // assert.equal(a, b, `fail : b === c `);
    assert.deepEqual(a, c, `fail : deepEqual 1 `);
    assert.deepEqual(a, b, `fail : deepEqual 2 `);

    b.bar = 'foo';
    assert.notDeepEqual(a, b, `fail : notDeepEqual `);

    console.log('ok');
} catch (err) {
    console.log(err.message);
}