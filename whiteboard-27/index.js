'use strict';

const run = require('./lib/solution');
const TreeNode = require('./lib/treeNode');
const BinaryTree = require('./lib/binaryTree');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

let binaryTree = new BinaryTree();

//orinal data
binaryTree.root = one;//root

one.left = two;
one.right = three;
two.left = four;

console.log(run.treeToSll(binaryTree));


