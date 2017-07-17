'use strict';

const InnerObject = function() {};
InnerObject.prototype = Object.prototype;
InnerObject.prototype.constructor = InnerObject;

module.exports = InnerObject;


!(function () {
    var __exportsVariable = require('/Users/yuer/workspaceforme/category/career/container/opensource/c-data/node_modules/defcomment/src/unit').exportsVariable;
    
})();