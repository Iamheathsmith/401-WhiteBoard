'use strict';

const run = require('./lib/solution');
const Tree = require('./lib/treeBuilder');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); //last leaf
test.insert(3,15); //last leaf
test.insert(1,4); //last leaf


console.log(run.childLess(test));