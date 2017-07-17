'use strict';

let {
    isInnerArray
} = require('./innerArray');

module.exports = () => {
    // hack Object.keys
    let keys = Object.keys;
    Object.keys = function(obj) {
        if (isInnerArray(obj)) {
            return keys(obj.__proto__);
        }
        return keys(obj);
    };

    // hack getOwnpropertyNames
    let getOwnPropertyNames = Object.getOwnPropertyNames;

    Object.getOwnPropertyNames = function(obj) {
        if (isInnerArray(obj)) {
            let names = keys(obj.__proto__);
            names = names.map((name) => name.toString());
            names.push('length');

            return names;
        }

        return getOwnPropertyNames.apply(this, [obj]);
    };

    // hack Object.prototype.toString
    let toString = Object.prototype.toString;
    Object.prototype.toString = function(...args) {
        if (this && typeof this === 'object' && isInnerArray(this)) {
            return '[object Array]';
        }

        return toString.apply(this, args);
    };

    // hack Array.isArray
    let isArray = Array.isArray;
    Array.isArray = function(obj) {
        if (isInnerArray(obj)) {
            return true;
        }

        return isArray.apply(this, [obj]);
    };
};
