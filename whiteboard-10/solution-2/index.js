'use strict';

const run = require('./lib/solution');


let test = parseInt(process.argv[2]);
let array = [0, 1, 2, 4, 5, 5.3, 5.7, 5.9, 6, 6.5, 7, 8, 9];


console.log(run.binaryIndexOf(test, array));