'use strict';

const run = require('./lib/solution.js');

let test = process.argv[2];

let obj= {head: {value: 1, next: {value: 3, next: {value: 6, next: null}}}};
let obj2 = {head: {value: 1, next: {value: 3, next: this.head}}};


if (test === 'loop'){
  run.testNode(obj2);
}
if (test === 'norm'){
  run.testNode(obj);
}
