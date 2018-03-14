'use strict';

const SLL = require('./SLL/sll');

module.exports = new class {
  treeToSll(arr) {
    if(!arr || typeof arr === 'string' || typeof arr === 'number') return null;
    let sll = new SLL();
    arr.inOrderTraversal();
    let test = arr.inOrd.sort((a, b) => b - a);
    while (test.length > 0) {
      sll.insertHead(test.shift());
    }
    return sll;
  }
};

