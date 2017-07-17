'use strict';
let cJs = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/ds/index.js'); // require source code
let unit = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/node_modules/defcomment/src/unit');
let it = unit.it;
let runCases = unit.runCases;
let cases = [];

cases.push(
    it('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/ds/index.js', {"test":"","tar":"function"},
         'object',
         "[\n     [['a', 1], {a: 1}],\n     [['a', 1, 'b'], {a: 1, b: null}]\n]",
         [
     [['a', 1], {a: 1}],
     [['a', 1, 'b'], {a: 1, b: null}]
],
         cJs)
);

cases.push(
    it('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/ds/index.js', {"test":"","tar":"function"},
         'array',
         "[\n     [[1, 2, 3], [1, 2, 3]],\n     [[], []]\n]",
         [
     [[1, 2, 3], [1, 2, 3]],
     [[], []]
],
         cJs)
);

var testRets = runCases(cases, '/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/ds/index.js');

if(typeof module === 'object') {
    module.exports = testRets;
}