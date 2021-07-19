const ex01 = require('../ex01');

describe('ex01', function () {
    this.timeout(5000);
    it('should run without error', function (done) {
        ex01('param-data', done);
    })
})