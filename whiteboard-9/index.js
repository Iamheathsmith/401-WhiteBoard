'use strict';

const run = require('./lib/solution');
const SLL = require('./lib/sll.js');


let test = new SLL();
test.insertEnd(2);
test.insertEnd(4);
test.insertEnd(6);
test.insertEnd(8);


run.findNthNodeFromEnd(process.argv[2], test);