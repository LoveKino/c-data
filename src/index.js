'use strict';

let {
    isNumber, isNull, isString, isBool, isUndefined, isFunction
} = require('basetype');

const specialProp = '6767c62c-0baa-47d5-b4b4-3f372eae8eeb';

/**
 * build composable and immutable data structure
 *
 * ## test
 * [
 *      [['a', 1], {a: 1}],
 *      [['a', 1, 'b'], {a: 1, b: null}]
 * ]
 */

let object = (...args) => {
    let v = {};

    for (let i = 0; i < args.length; i = i + 2) {
        let key = args[i];
        let value = args[i + 1];
        if (args.length - 1 === i) {
            value = null;
        }
        defineProp(v, key, value);
    }

    freezeObj(v);

    return v;
};

/**
 * ## test
 *
 * [
 *      [[1, 2, 3], [1, 2, 3]],
 *      [[], []]
 * ]
 */
let array = (...args) => {
    let v = [];

    for (let i = 0; i < args.length; i++) {
        defineProp(v, i, args[i]);
    }

    freezeObj(v);

    return v;
};

let defineProp = (obj, key, value) => {
    if (isNull(value) ||
        isString(value) ||
        isNumber(value) ||
        isBool(value) ||
        isUndefined(value) ||
        isInternelObject(value)
    ) {
        obj[key] = value;
    } else {
        throw new Error(`try to define prop to a internel object, but the prop value is not null or string or number or bool or undefined or internel object. The prop value is ${value}.
Please try those forms:

object('a', 12)

object('a', null)            

object('a', object('b', 20))

object('a', array(1, 2))
`);
    }
};

let freezeObj = (obj) => {
    if (isFunction(Object.defineProperty)) {
        Object.defineProperty(obj, specialProp, {
            value: true,
            configurable: false,
            enumerable: false,
            writable: false
        });
    }

    if (isFunction(Object.freeze)) {
        Object.freeze(obj);
    }
};

let isInternelObject = (v) => {
    if (isFunction(Object.defineProperty)) {
        return !!v[specialProp];
    }

    return false;
};

module.exports = {
    array,
    object
};
