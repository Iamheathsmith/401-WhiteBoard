'use strict';

const doThing = module.exports = {};
const Stack = require('./stackbuilder.js');
const SLL = require('./sllBuilder');




doThing.dedupe = function(arr) { //The Big O is O(n2)
  if (!arr || typeof arr == 'string' || typeof arr == 'number' || Array.isArray(arr)) return null;
  let stack = new Stack();
  let sll = new SLL();
  let cur = arr.head;
  while (cur.next) {
    if (cur.value !== cur.next.value) {
      stack.push(cur.value);
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  stack.push(cur.value);
  while (stack.size > 0) {
    sll.insertHead(stack.pop().value);
  }
  return sll;
};


