'use strict';

const doThing = require('../lib/solution.js');
require('jest');


let array = [0, 1, 2, 4, 5, 5.3, 5.7, 5.9, 6, 6.5, 7, 8, 9];

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.binaryIndexOf()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.binaryIndexOf('pizza', array)).toBe(null);
    expect(doThing.binaryIndexOf(1)).toBe(null);
    expect(doThing.binaryIndexOf(1, 'pizza')).toBe(null);
  });
  it('checks to see if its the right answer with number', function() {
    expect(doThing.binaryIndexOf(1, array)).toEqual({'index': 1, 'value': 1});
  });
  it('checks to see if we get a wrong answer', function() {
    expect(doThing.binaryIndexOf(10, array)).toBe('item is not in array, please look at 0,1,2,4,5,5.3,5.7,5.9,6,6.5,7,8,9');
  });
});
