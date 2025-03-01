const a = 12;
const b = 11;

describe("increase", function() {
    it(`12 плюс 11 будет 23`, function() {
        assert.equal(increase(a, b), 23);
    });
    it(`${a} плюс ${b} будет ${a+b}`, function() {
        assert.equal(increase(a, b), 22);
    });

});

describe("degree", function() {
    it(`${a} в степени ${b} будет ${a**b}`, function() {
        assert.equal(degree(a, b), 743008370688);
    });
    it(`${a} в степени ${b} будет ${a**b}`, function() {
        assert.equal(degree(a, b), 743008370687);
    });
});

describe("procent", function() {
    it(`процент ${b} от ${a} будет 1,32`, function() {
        assert.equal(procent(a, b), 1,32);
    });
    it(`процент ${b} от ${a} будет 1,32`, function() {
        assert.equal(procent(a, b), 1,33);
    });
});

describe("root", function() {
    it(`корень ${a} будет 3,464101615137755`, function() {
        assert.equal(root(a), 3,464101615137755);
    });
    it(`корень ${a} будет 3,464101615137755`, function() {
        assert.equal(root(a), 3,464101615137655);
    });
});

describe("decrease", function() {
    it(`${a} минус ${b} будет ${a-b}`, function() {
        assert.equal(decrease(a, b), 1);
    });
    it(`${a} минус ${b} будет ${a-b}`, function() {
        assert.equal(decrease(a, b), 2);
    });
});

describe("multiply", function() {
    it(`${a} умножить на ${b} будет ${a*b}`, function() {
        assert.equal(multiply(a, b), 132);
    });
    it(`${a} умножить на ${b} будет ${a*b}`, function() {
        assert.equal(multiply(a, b), 133);
    });
});

describe("devide", function() {
    it(`${a} делить на ${b} будет ${a/b}`, function() {
        assert.equal(degree(a, b), 1.090909090909091);
    });
    it(`${a} делить на ${b} будет ${a/b}`, function() {
        assert.equal(degree(a, b), 1.090909090908091);
    });
});

