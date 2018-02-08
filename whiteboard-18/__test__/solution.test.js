'use strict';

const Tree = require('../lib/treeBuilder');
const doThing = require('../lib/solution.js');
require('jest');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5); //node with most children
test.insert(2,4); 
test.insert(3,15); 
test.insert(1,4); 
test.insert(3,4); 


describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.sortAndSll()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.sortAndSll(1)).toBe(null);
    expect(doThing.sortAndSll('test')).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.sortAndSll(test).head.value).toEqual(1);
    expect(doThing.sortAndSll(test).head.next.next.next.next.next.next.value).toEqual(15);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.sortAndSll(test).head.value).not.toEqual(5);
  });
});
