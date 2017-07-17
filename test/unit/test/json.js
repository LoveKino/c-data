'use strict';
let cJs = null;
let unit = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/node_modules/defcomment/src/unit');
let it = unit.it;
let runCases = unit.runCases;
let cases = [];



var testRets = runCases(cases, '/Users/yuer/workspaceforme/category/career/container/opensource/c-data/test/unit/dest/json.js');

if(typeof module === 'object') {
    module.exports = testRets;
}