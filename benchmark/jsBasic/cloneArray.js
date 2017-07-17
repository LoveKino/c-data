'use strict';

let Benchmark = require('benchmark');

let log = console.log; // eslint-disable-line

let suite = new Benchmark.Suite;

let shortArray = [1, 2, 3, 4];

let longArray = [];

for (let i = 0; i < 50000; i++) {
    longArray[i] = i;
}

suite.add('slice short', () => {
    shortArray.slice(0);
}).add('slice long', () => {
    longArray.slice(0);
}).add('concat clone: long concat short', () => {
    longArray.concat([]);
}).add('concat clone: short concat long', () => {
    [].concat(longArray);
}).add('iteration', () => {
    let ret = [];
    for (let i = 0; i < longArray.length; i++) {
        ret[i] = longArray[i];
    }
}).add('push', () => {
    Array.prototype.push.apply([], longArray);
}).on('cycle', (event) => {
    log(String(event.target));
}).on('complete', function() {
    log('Fastest is ' + this.filter('fastest').map('name'));
}).run({
    'async': true
});
