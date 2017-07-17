'use strict';

let Benchmark = require('benchmark');

let log = console.log; // eslint-disable-line

let suite = new Benchmark.Suite;

let obj = {};

for (let i = 0; i < 10000; i++) {
    obj['__index' + i] = i;
}

suite.add('iteration', () => {
    let v = {};
    for (let name in obj) {
        v[name] = obj[name];
    }
}).add('keys', () => {
    let v = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        v[key] = obj[key];
    }
}).add('forEach', () => {
    let v = {};
    let keys = Object.keys(obj);
    keys.forEach((key) => {
        v[key] = obj[key];
    });
}).add('assign', () => {
    Object.assign({}, obj);
}).add('object create as prototype', () => {
    Object.create(obj);
}).add('object create as prototype, simple one', () => {
    Object.create({});
}).on('cycle', (event) => {
    log(String(event.target));
}).on('complete', function() {
    log('Fastest is ' + this.filter('fastest').map('name'));
}).run({
    'async': true
});
