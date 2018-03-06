'use strict';

const doThing = require('../lib/solution');
const TreeNode = require('../lib/treeNode');
const BinaryTree = require('../lib/binaryTree');
require('jest');


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);

let binaryTree = new BinaryTree();

binaryTree.root = one;//root

one.left = two;
one.right = three;
two.left = four;

let answer = {'head': {'value': 1, 'next':{'value': 2, 'next': {'value': 3, 'next': {'value': 4, 'next': null}}}}, 'size': 4};



describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.treeToSll()).toBe(null);
  });
  it('checks to see that no string is passed in.', function() {
    expect(doThing.treeToSll('string')).toBe(null);
  });
  it('checks to see that no number is passed in.', function() {
    expect(doThing.treeToSll(8)).toBe(null);
  });
  it('checks to see if we are getting a true of false ', function() {
    expect(doThing.treeToSll(binaryTree)).toEqual(answer);  
  });
});