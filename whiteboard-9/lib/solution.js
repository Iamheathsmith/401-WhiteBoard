'use strict';

const doThing = module.exports = {};


doThing.findNthNodeFromEnd = function(n, arr) { //The Big O is O(3n)
  if (!n || !arr || typeof n !== 'number' || typeof arr !== 'object') return null;
  arr.reverseSLL();
  let current = arr.head;
  for(let i = 1; i < n; i ++) {
    current = current.next;
    if(!current) return 'the SLL does not have this node index';
  }
  arr.reverseSLL();
  console.log('this',current);
  return current;
};
