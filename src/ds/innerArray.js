'use strict';

let {
    isFunction
} = require('basetype');

const innerArrayKey = '__inner_array__';

let Node = function(v) {
    this.v = v;
};

Node.prototype = {
    constructor: Node,
    setNextNode: function(node) {
        this.nextNode = node;
    },
    getNextNode: function() {
        return this.nextNode;
    },
    getValue: function() {
        return this.v;
    }
};

let newArray = (list) => {
    let v = [];

    let refer = new Node();

    Object.defineProperty(v, '__ListHead', {
        value: refer,
        configurable: false,
        enumerable: false,
        writable: false
    });

    let cur = refer;
    for (let i = 0; i < list.length; i++) {
        let node = new Node(list[i]);
        cur.setNextNode(node);
        cur = node;
        v[i] = list[i];
    }

    let HeadClass = HeadClasser(list);

    let value = new HeadClass();

    return value;
};

let cloneInnerArray = (innerArray) => {
    let HeadClass = innerArray[innerArrayKey];
    return new HeadClass();
};

let HeadClasser = (list) => {
    let HeadClass = function() {};

    let proto = new Array();

    Object.defineProperty(proto, 'constructor', {
        value: Array
    });

    Object.defineProperty(proto, 'length', {
        value: list.length
    });

    Object.defineProperty(proto, innerArrayKey, {
        value: HeadClass
    });

    for (let i = 0; i < list.length; i++) {
        proto[i] = list[i];
    }

    Object.freeze(proto); // forbidden to modify prototype

    HeadClass.prototype = proto;

    return HeadClass;
};

let isInnerArray = (v) => {
    if (!v || typeof v !== 'object') return false;
    return !!v[innerArrayKey];
};

module.exports = {
    newArray,
    cloneInnerArray,
    isInnerArray
};
