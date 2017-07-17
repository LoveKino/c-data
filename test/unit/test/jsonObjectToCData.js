'use strict';
let cJs = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/jsonObjectToCData.js'); // require source code
let unit = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/node_modules/defcomment/src/unit');
let it = unit.it;
let runCases = unit.runCases;
let cases = [];

cases.push(
    it('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/jsonObjectToCData.js', {"test":"","tar":"function"},
         'jsonObjectToCData',
         "[\n     [[{a: 1}], {a: 1}],\n     [[{a: 1, b: [1, 2]}], {a: 1, b: [1, 2]}],\n     [[1], 1],\n     [[null], null],\n     [[[1, 2, 3]], [1, 2, 3]]\n]",
         [
     [[{a: 1}], {a: 1}],
     [[{a: 1, b: [1, 2]}], {a: 1, b: [1, 2]}],
     [[1], 1],
     [[null], null],
     [[[1, 2, 3]], [1, 2, 3]]
],
         cJs)
);

var testRets = runCases(cases, '/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/jsonObjectToCData.js');

if(typeof module === 'object') {
    module.exports = testRets;
}