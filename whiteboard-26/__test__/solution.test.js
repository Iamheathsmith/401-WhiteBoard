'use strict';

const doThing = require('../lib/solution');
require('jest');

describe('#solution module', function() {

  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.mathStuff()).toBe(null);
  });
  it('checks to see if the right thing is passed in, this case a number', function() {
    expect(doThing.mathStuff('string', 3)).toBe(null);
    expect(doThing.mathStuff([], 3)).toBe(null);
  });
  it('checks to see if the number is a whole number', function() {
    expect(doThing.mathStuff(4.5, 5)).toBe(null);
  });
  it('checks to see if we are returning the right number', function() {
    expect(doThing.mathStuff(2, 15)).toEqual(26);
    expect(doThing.mathStuff(2, 2)).toEqual(4);
  });
  it('checks to see if we are doing things right.', function() {
    expect(doThing.mathStuff(2, 2)).not.toEqual(6);
  });
});