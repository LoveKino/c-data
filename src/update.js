'use strict';

let {
    isObject, isArray
} = require('basetype');

/**
 * modify immutable data will get a new data
 */

let set = (v, key, value) => {
    let newV = null;
    if (isObject(v)) {
        // clone first
        newV = {};
        for (let name in v) {
            newV[name] = v[name];
        }
    } else if (isArray(v)) {
        newV = v.slice(0);
    } else {
        throw new Error(`try to set prop for a none-object object, object is ${v}.`);
    }

    // assign value
    newV[key] = value;

    return newV;
};

module.exports = {
    set
};
