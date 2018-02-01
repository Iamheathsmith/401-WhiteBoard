'use strict';

const run = require('./lib/solution');
const SLL = require('./lib/sllBuilder');

let test = new SLL();
test.insertEnd(1);
test.insertEnd(1);
test.insertEnd(2);
test.insertEnd(3);
test.insertEnd(3);
test.insertEnd(4);
test.insertEnd(4);
test.insertEnd(5);
test.insertEnd(5);


console.log(run.dedupe(test));