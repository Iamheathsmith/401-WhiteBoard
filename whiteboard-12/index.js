'use strict';

const run = require('./lib/solution');

let stack = new run();
stack.enqueue(1);
stack.enqueue(2);

let stack2 = new run();
stack2.enqueue(1);
stack2.enqueue(2);
stack2.dequeue();

let stack3 = new run();
stack3.enqueue(1);
stack3.enqueue(2);
stack3.dequeue();
stack3.dequeue();



let test = process.argv[2];


if (test === '1') {
  console.log(stack);
}
if (test === '2') {
  console.log(stack2);
}
if (test === '3') {
  console.log(stack3);
}