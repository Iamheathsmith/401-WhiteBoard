'use strict';

const doThing = module.exports = {};
const SLL = require('./sll');



doThing.sortAndSll = function(root) {
  if(!root || typeof root === 'string' || typeof root === 'number' ) return null;
  let testArray = [];
  let sll = new SLL();
  
  root.breadthFirst(current => {
    if(current.val) {
      testArray.push(current.val.val);
    }
  });
  testArray.sort(function(a, b) {return a - b;});

  for(let i in testArray) {
    sll.insertEnd(testArray[i]);
  }
  return sll ;
};



