'use strict';

let {
    a
} = require('../..');
let assert = require('assert');

describe('index', () => {
    it('slice', () => {
        var v = a(1, 2, 3, 4);
        var v2 = v.slice(0);
        assert.deepEqual(v2, v);
        assert.deepEqual(v, [1, 2, 3, 4]);
    });

    it('Object.keys', () => {
        var v = a(4, 5, 7);
        let keys = Object.keys(v);
        assert.deepEqual(keys, [0, 1, 2]);
    });

    it('Object.keys', () => {
        var v = a(4, 5, 7);
        let keys = Object.keys(v);
        assert.deepEqual(keys, [0, 1, 2]);
    });

    it('Object.getOwnPropertyNames', () => {
        var v = a(4, 5, 7);
        let keys = Object.getOwnPropertyNames(v);

        assert.deepEqual(keys, ['0', '1', '2', 'length']);
    });

    it('Object.prototype.toString', () => {
        var v = a(4, 5, 7);
        assert.equal(Object.prototype.toString.call(v), '[object Array]');
    });

    it('instance', () => {
        var v = a(4, 5, 7);
        assert.equal(v instanceof Array, true);
    });

    it('Array.isArray', () => {
        var v = a(4, 5, 7);
        assert.equal(Array.isArray(v), true);
    });

    it('map', () => {
        var v = a(5, 8, 10);
        let v2 = v.map((item) => ++item);
        assert.deepEqual(v2, [6, 9, 11]);
    });

    it('toString', () => {
        var v = a(5, 8, 10);
        assert.equal(v.toString(), '5,8,10');
    });

    it('concat', () => {
        var v1 = a(5, 8, 10);
        var v2 = a(6, 10, 20);
        console.log(v1.concat(v2));
    });
});
