'use strict';

let {
    isObject, isArray
} = require('basetype');

let {
    objectMap, arrayList
} = require('./ds');

/**
 *
 * ## test
 *
 * [
 *      [[{a: 1}], {a: 1}],
 *      [[{a: 1, b: [1, 2]}], {a: 1, b: [1, 2]}],
 *      [[1], 1],
 *      [[null], null],
 *      [[[1, 2, 3]], [1, 2, 3]]
 * ]
 */
let jsonObjectToCData = (jsonObject) => {
    let root = {
        source: jsonObject,
        children: []
    };

    let stack = [root];

    while (stack.length) {
        let node = stack.pop();

        let {
            source, parent, isFirst
        } = node;

        if (isObject(source)) {
            let keys = Object.keys(source);

            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let child = {
                    source: source[key],
                    parent: node,
                    key,
                    isFirst: i === 0,
                    children: []
                };
                stack.push(child);
                node.children.push(child);
            }
        } else if (isArray(source)) {
            for (let i = 0; i < source.length; i++) {
                let child = {
                    source: source[i],
                    parent: node,
                    key: i,
                    isFirst: i === 0,
                    children: []
                };
                stack.push(child);
                node.children.push(child);
            }
        } else {
            node.value = source;
        }

        if (isFirst) {
            if (isArray(parent.source)) {
                let list = parent.children.map(({
                    value
                }) => value);

                parent.value = arrayList(list);
            } else if (isObject(parent.source)) {
                let map = parent.children.reduce((prev, {
                    value, key
                }) => {
                    prev[key] = value;
                    return prev;
                }, {});

                parent.value = objectMap(map);
            }
        }
    }

    return root['value'];
};

module.exports = jsonObjectToCData;


!(function () {
    var __exportsVariable = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/node_modules/defcomment/src/unit').exportsVariable;
    __exportsVariable('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/jsonObjectToCData.js', 'jsonObjectToCData', jsonObjectToCData);
})();