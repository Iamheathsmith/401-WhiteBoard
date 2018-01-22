'use strict';

const doThing = require('../lib/solution.js');

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.loop()).toBe(null);
  });
  it('checks to see if what was passed is an number', function() {
    expect(doThing.loop('pizza')).toBe(null);
  });
  it('checks to see if the value is greater then 0', function() {
    expect(doThing.loop(0)).toBe(null);
  });
  it('checks to see if the right answer is been passed', function() {
    expect(doThing.loop(3)).toEqual(3);
  });
  it('checks to see if the if it does not give the wrong answer', function() {
    expect(doThing.loop(4)).not.toEqual(3);
  });
  it('checks to see if we round the number up for error prof', function() {
    expect(doThing.loop(4.6)).toEqual(5);
  });
});
