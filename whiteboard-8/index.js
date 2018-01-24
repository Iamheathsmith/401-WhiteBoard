'use strict';

const run = require('./lib/solution');
const SLL = require('./lib/sll.js');

let test = new SLL();
test.insertEnd(9);
test.insertEnd(5);
test.insertEnd(7);

let test1 = new SLL();
test1.insertEnd(5);
test1.insertEnd(2);
test1.insertEnd(7);

run.findMatch(test, test1);