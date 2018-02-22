'use strict';

const testThing = require('../lib/solution.js');
require('jest');

let test = ['acre', 'race', 'care', 'act', 'cat', 'tac'];
let answer = ['acre', 'race', 'care', 'act', 'cat', 'tac'];
let wrong = [ [ 'acre', 'race', 'care' ], [ 'act', 'cat', 'tac' ] ];

describe('#solution for HASH', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(testThing.doThing()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(testThing.doThing(1)).toBe(null);
    expect(testThing.doThing('test')).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(testThing.doThing(test)).toEqual(answer);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(testThing.doThing(test)).not.toEqual(wrong);
  });
});
