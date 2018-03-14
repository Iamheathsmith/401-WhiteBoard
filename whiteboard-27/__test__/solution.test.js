'use strict';

const doThing = require('../lib/solution');
require('jest');

const TreeNode = require('../lib/treeNode');
const BinaryTree = require('../lib/binaryTree');

let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

let test1 = new TreeNode(1);
let test2 = new TreeNode(2);
let test3 = new TreeNode(3);
let test4 = new TreeNode(4);

let best1 = new TreeNode(1);
let best2 = new TreeNode(2);
let best3 = new TreeNode(3);
let best4 = new TreeNode(4);


let binaryTree = new BinaryTree();
let mockTree = new BinaryTree();
let mockTree2 = new BinaryTree();

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


//mock2 data
mockTree2.root = best1;//root

best1.left = best2;
best1.right = best3;
best2.right = best4;


describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.isMatched()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.isMatched(binaryTree, 3)).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a string', function() {
    expect(doThing.isMatched('string', binaryTree)).toBe(null);
  });
  it('checks to see if we are getting a true of false ', function() {
    expect(doThing.isMatched(binaryTree, mockTree)).toBe(true);
    expect(doThing.isMatched(binaryTree, mockTree2)).toBe(false);
  });
});