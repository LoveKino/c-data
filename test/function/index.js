'use strict';

let {
    o, a
} = require('../..');
let assert = require('assert');

describe('index', () => {
    it('base', () => {
        let v = o('a', 3);
        assert.deepEqual(v, {
            a: 3
        });
    });

    it('immutable', (done) => {
        let v = o('a', 3);
        try {
            v.b = 10;
        } catch (err) {
            assert.deepEqual(err.toString().indexOf('object is not extensible') !== -1, true);
            done();
        }
    });

    it('composable form', () => {
        let v = o(
            'a', o(
                'b', 1,
                'c', 2
            ),

            'd', a(1, 2, 3)
        );

        assert.deepEqual(v, {
            a: {
                b: 1,
                c: 2
            },

            d: [1, 2, 3]
        });
    });

    it('composable illegal form', (done) => {
        try {
            o(1, {});
        } catch (err) {
            assert.deepEqual(err.toString().indexOf('try to define prop to a internel o') !== -1, true);
            done();
        }
    });
});
