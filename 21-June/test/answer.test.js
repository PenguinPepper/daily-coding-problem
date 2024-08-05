const assert = require('assert');
const serialization = require('../answer.js');
const deserialization = require('../answer.js');

describe('Test the serialization of the binary tree', function () {
    it('Returns the correct serialization of the binary tree', function () {
        answer = "1,2,4,null,null,5,null,null,3,null,null";
        funcAns = serialization([1, 2, 3, 4, 5]);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Returns the correct serialization of the binary tree', function () {
        answer = "1,2,4,null,null,5,null,null,3,null,null";
        funcAns = serialization([1, 2, 3, 4, 5]);
        assert.deepStrictEqual(answer, funcAns);
    });
    it('Returns the correct serialization of the binary tree', function () {
        answer = "1,2,4,null,null,5,null,null,3,null,null";
        funcAns = serialization([1, 2, 3, 4, 5]);
        assert.deepStrictEqual(answer, funcAns);
    })
    it('Returns the correct serialization of the binary tree', function () {
        answer = "1,2,4,null,null,5,null,null,3,null,null";
        funcAns = serialization([1, 2, 3, 4, 5]);
        assert.deepStrictEqual(answer, funcAns);
    })
})