'use strict';

const doThing = module.exports = {};


doThing.childLess = function(root) {
  if (!root || typeof root === 'number' || typeof root === 'string') return null;
  let noChildren = [];
  root.breadthFirst(current => {
    if(current.val.children.length === 0) {
      noChildren.push(current.val);
    }
  });
  return noChildren;
};



