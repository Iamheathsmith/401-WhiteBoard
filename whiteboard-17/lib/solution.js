'use strict';

const doThing = module.exports = {};

doThing.findMaxChild = function(root) {
  if(!root || typeof root === 'string' || typeof root === 'number' ) return null;
  let maxChild = root.root;
  
  root.breadthFirst(current => {

    if(current.val.children.length > maxChild.children.length) {
      maxChild = current.val;
    }
  });
  return maxChild ;
};


