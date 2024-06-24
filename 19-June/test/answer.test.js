const assert = require('assert');
const sumInArray = require('../answer.js');

describe('Testing that a sum is indeed in the array', function() {
    it('Finds the correct sum in small numbers', function() {
        answer = true;
        funcAns = sumInArray([10, 15, 3, 7], 17);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Finds the correct sum in large numbers', function() {
        answer = true;
        funcAns = sumInArray([100, 78, 20, 31, 62, 81, 97], 109);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Finds the correct sum in negative numbers', function() {
        answer = true;
        funcAns = sumInArray([-10, -15, -3, -7], -13);
        assert.deepStrictEqual(answer, funcAns);
    });
})

describe('Testing that a sum is not in the array', function() {
    it('Does not find the correct sum in small numbers', function() {
        answer = false;
        funcAns = sumInArray([10, 15, 3, 7], 16);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Does not find the correct sum in large numbers', function() {
        answer = false;
        funcAns = sumInArray([100, 78, 20, 31, 62, 81, 97], 115);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Does not find the correct sum for zero', function() {
        answer = false;
        funcAns = sumInArray([0, 1, 3, 7], 0);
        assert.deepStrictEqual(answer, funcAns);
    })
})

describe('Testing an empty array', function() {
    it('Returns false', function() {
        answer = false;
        funcAns = sumInArray([], 0);
        assert.deepStrictEqual(answer, funcAns);
    });
})