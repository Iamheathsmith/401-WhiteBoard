'use strict';

const doThing = require('../lib/solution.js');
require('jest');

describe('#solution module', function() {
  let array = [[1, 4, 6, 8, 'tim'], [1, 6, 8, 'tim'], [5, 7, 10]];
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMatch()).toBe(null);
  });
  it('checks to see if only one array is passed into the function', function() {
    expect(doThing.findMatch(array[0])).toBe(null);
  });
  it('checks to see if both items passed in are arrays', function() {
    expect(doThing.findMatch('string', array[1])).toBe(null);
  });
  it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(array[0], array[1])).toEqual([1, 6, 8, 'tim']);
  });
  it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(array[1], array[2])).toEqual('no matching pairs');
  });
});
