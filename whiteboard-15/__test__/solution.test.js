'use strict';

const Tree = require('../lib/treeBuilder');
const doThing = require('../lib/solution.js');
require('jest');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); //last leaf
test.insert(3,15); //last leaf
test.insert(1,4); //last leaf

let test2 = new Tree();
test2.insert(5);

let answer = [ { val: 3, children: [] }, { val: 2, children: [] }, { val: 1, children: [] } ];
let answer2 = [{ children: [], val: 5}];

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.childLess()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.childLess(1)).toBe(null);
    expect(doThing.childLess('test')).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.childLess(test)).toEqual(answer);
    expect(doThing.childLess(test2)).toEqual(answer2);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.childLess(test)).not.toEqual(test);
  });
});
