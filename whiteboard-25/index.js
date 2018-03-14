'use strict';

const run = require('./lib/solution');
const yaDo = require('./lib/solution2');

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log('your total is', run.fib(6));
console.log('your total is', yaDo(6));

