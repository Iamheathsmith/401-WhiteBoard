'use strict';

const run = require('./lib/solution');
const Tree = require('./lib/treeBuilder');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5); //node with most children
test.insert(2,4); 
test.insert(3,15); 
test.insert(1,4); 
test.insert(3,4); 


console.log(run.findMaxChild(test));