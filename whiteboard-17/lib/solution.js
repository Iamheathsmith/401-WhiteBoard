'use strict';

const doThing = module.exports = {};


doThing.findVal = function(root) {
  if (!root || typeof root === 'number' || typeof root === 'string') return null;
  let total = 0;
  root.breadthFirst(current => {
    if(current.val.val) {
      total += current.val.val;
    }
  });
  return total;
};



