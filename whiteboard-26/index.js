'use strict';

const run = require('./lib/solution');
const TreeNode = require('./lib/treeNode');
const BinaryTree = require('./lib/binaryTree');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

let test1 = new TreeNode(1);
let test2 = new TreeNode(2);
let test3 = new TreeNode(3);
let test4 = new TreeNode(4);


let binaryTree = new BinaryTree();
let mockTree = new BinaryTree();

//orinal data
binaryTree.root = one;//root

one.left = two;
one.right = three;
two.left = four;


//mock data
mockTree.root = test1;//root

test1.left = test2;
test1.right = test3;
test2.left = test4;
// test2.right = test4;

console.log(run.isMatched(binaryTree, mockTree));


