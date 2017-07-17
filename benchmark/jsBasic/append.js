'use strict';

let Benchmark = require('benchmark');

let log = console.log; // eslint-disable-line

let suite = new Benchmark.Suite;

suite.add('concat', () => {
    var a = [1, 2, 3, 4];
    a.concat([5, 6, 7]);
}).add('splice', () => {
    var a = [1, 2, 3, 4];
    a.splice(4, 0, 5, 6, 7);
}).add('push', () => {
    var a = [1, 2, 3, 4];
    a.push(5, 6, 7);
}).add('unshift', () => {
    var b = [5, 6, 7];
    b.unshift(1, 2, 3, 4);
}).add('slice and push', () => {
    var a = [1, 2, 3, 4];
    a.slice(0).push(5, 6, 7);
}).add('assign', () => {
    var a = [1, 2, 3, 4];
    a[4] = 5;
    a[5] = 6;
    a[6] = 7;
}).on('cycle', (event) => {
    log(String(event.target));
}).on('complete', function() {
    log('Fastest is ' + this.filter('fastest').map('name'));
}).run({
    'async': true
});
