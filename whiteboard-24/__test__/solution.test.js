'use strict';

const doThing = require('../lib/solution');
require('jest');

describe('#solution module', function() {
  let test = [1,2,4,5,6];
  let test2 = [7,8,4,9,4,0,11];
  let test3 = [7,8,9,20];
  let answer = ['4']

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMatch()).toBe(null);
  });
  it('checks to see if only one array is passed into the function', function() {
    expect(doThing.findMatch(test)).toBe(null);
  });
  it('checks to see if both items passed in are arrays', function() {
    expect(doThing.findMatch(test, 4)).toBe(null);
    expect(doThing.findMatch('string', test)).toBe(null);
  });
  it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(test, test2)).toEqual(answer);
  });
  it('checks to see if we are returning only matching', function() {
    expect(doThing.findMatch(test, test3)).toEqual('no matching pairs');
  });
});