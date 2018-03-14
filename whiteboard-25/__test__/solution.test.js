'use strict';

const doThing = require('../lib/solution');
require('jest');

describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.fib()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.fib('string')).toBe(null);
    expect(doThing.fib([])).toBe(null);
  });
  it('checks to see if the number is a whole number', function() {
    expect(doThing.fib(4.5)).toBe(null);
  });
  it('checks to see if we are returning the right number', function() {
    expect(doThing.fib(4)).toEqual(3);
    expect(doThing.fib(1)).toEqual(1);
    expect(doThing.fib(10)).toEqual(55);
  });
  it('checks to see if we are doing things right.', function() {
    expect(doThing.fib(3)).not.toEqual(6);
  });
});