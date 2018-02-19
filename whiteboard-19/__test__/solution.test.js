'use strict';

const doThing = require('../lib/solution.js');
require('jest');

let test = [1, 3, 5, 7, 9];
let answer = [2, 6, 10, 14, 18];


let cb = function(arg) {
  let result;
  result = arg * 2;
  return result;
};

let cbFil = function(arg) {
  let result;
  result = arg >= 5;
  return result;
};

describe('#solution module for MAP', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.map()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.map(1, cb)).toBe(null);
    expect(doThing.map('bam', cb)).toBe(null);
    expect(doThing.map(test)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.map(test, cb)).toEqual(answer);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.map(test, cb)).not.toEqual(test);
  });
});


describe('#solution module for FILTER', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.filter()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.filter(1, cbFil)).toBe(null);
    expect(doThing.filter('bam', cbFil)).toBe(null);
    expect(doThing.filter(test)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.filter(test, cbFil)).toEqual([5, 7, 9]);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.filter(test, cbFil)).not.toEqual(test);
  });
});


describe('#solution module for REDUCE', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.reduce()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.reduce(1, cb)).toBe(null);
    expect(doThing.reduce('bam', cb)).toBe(null);
  });
  it('checks to see if its the right answer is given', function() {
    expect(doThing.reduce(test, cb, 0)).toEqual(50);
  });
  it('checks to see if its does not return the same data passed in.', function() {
    expect(doThing.reduce(test, cb)).not.toEqual(test);
  });
});