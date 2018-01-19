'use strict';

const doThing = module.exports = {};


doThing.findMid = function(arr) {
  if (!arr || typeof arr !== 'object') return null;
  let newList = Object.assign({}, arr);
  let counter = 0;
  while (newList) {
    counter++;
    newList = newList.next;
  }
  if (counter % 2 !== 0) {
    counter - 1;
  }
  let mid = Math.ceil(counter / 2);
  for (let i = 1; i < mid; i++) {
    arr = arr.next;
  }
  return arr;
};
