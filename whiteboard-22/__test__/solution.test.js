'use strict';

const doThing = require('../lib/solution.js');
require('jest');

let test = 'this is how we do things bam';
let answer = { maxValue: 'things', wordVal: 77 };

describe('#solution module for MAP', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.high()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.high(1)).toBe(null);
    expect(doThing.high([1,3])).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.high(test)).toEqual(answer);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.high(test)).not.toEqual(test);
  });
});
