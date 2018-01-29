'use strict';

const doThing = require('../lib/solution.js');
require('jest');


let arr = [1,2,4,5,6,7,8,9,10]; // missing 3
let arr1 = [1,2,4,5,6,7,8,9,10,11,12,14,15,16,18]; // missing 3,13,17
let arr2 = [1,2,4,5,7,8,9,10]; // missing 3,6


describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMissingNum ()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.findMissingNum (123)).toBe(null);
    expect(doThing.findMissingNum ('test')).toBe(null);
  });
  it('checks to see if its the right answer', function() {
    expect(doThing.findMissingNum (arr)).toEqual([3]);
    expect(doThing.findMissingNum (arr1)).toEqual([3,13,17]);
  });
  it('checks to see if its the right answer', function() {
    expect(doThing.findMissingNum (arr)).not.toEqual(arr2);
  });
});
