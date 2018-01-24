'use strict';

const doThing = module.exports = {};
const SLL = require('./sll');


doThing.findMatch = function(arr, arr1) {
  if (!arr || !arr1 || typeof arr !== 'object' || typeof arr1 !== 'object') return null;
  let table = {};
  let resultList = new SLL();
  let currentNode = arr.head;
  while (currentNode) {  //Big O is O(n)
    table[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  currentNode = arr1.head;
  while (currentNode) {  //Big O is O(n)
    if (table[currentNode.value]) {
      resultList.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  console.log(resultList);
  return resultList;
};

