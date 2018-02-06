'use strict';

const Tree = require('../lib/treeBuilder');
const doThing = require('../lib/solution.js');
require('jest');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); 
test.insert(3,15); 
test.insert(1,4); 


describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findVal()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.findVal(1)).toBe(null);
    expect(doThing.findVal('test')).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.findVal(test)).toEqual(30);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.findVal(test)).not.toEqual(31);
  });
});
