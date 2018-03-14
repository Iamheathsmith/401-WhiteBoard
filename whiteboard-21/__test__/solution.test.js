'use strict';

const doThing = require('../lib/solution.js');
require('jest');

let test = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

let answer = [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ];


describe('#solution module for MAP', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.rotate()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.rotate(1)).toBe(null);
    expect(doThing.rotate('bam')).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.rotate(test)).toEqual(answer);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.rotate(test)).not.toEqual(test);
  });
});
