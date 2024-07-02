const assert = require('assert');
const productArray = require('../answer.js');

describe('Testing that the product of all numbers in the array is correct', function() {
    it('Returns the correct product array in small numbers', function() {
        answer = [120, 60, 40, 30, 24];
        funcAns = productArray([1, 2, 3, 4, 5]);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Returns the correct product array in large numbers', function() {
        answer = [500, 50, 100, 50];
        funcAns = productArray([1, 10, 5, 10]);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Returns the correct product array in a short array', function(){
        answer = [2, 3, 6];
        funcAns = productArray([3, 2, 1]);
        assert.deepStrictEqual(answer, funcAns);
    })
    it('Returns the correct product array for a mixed number array', function(){
        answer = [-36, 162, 108, 54, -324];
        funcAns = productArray([9, -2, -3, -6, 1]);
        assert.deepStrictEqual(answer, funcAns);
    })
})