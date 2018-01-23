'use strict';

const doThing = module.exports = {};


doThing.testNode = function(arr) {
  if (!arr || typeof arr === 'string' || typeof arr === 'number' ) return null;
  let newObj = Object.assign({}, arr);
  while (newObj.head) {
    newObj = newObj.head;

    while (newObj.next) {
      newObj = newObj.next;
      if (newObj.next === newObj.head) {
        console.log(true);
        return true;
      }
      console.log(false);
      return false;
    }
  }
};