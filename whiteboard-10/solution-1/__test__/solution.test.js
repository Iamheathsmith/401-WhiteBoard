'use strict';

const doThing = require('../lib/solution.js');
require('jest');


let answer = 'this is a { test { of the } remove}';
let answer2 = 'this is a { test{ { of the } remove}}}';

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.checkBraces()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.checkBraces(1)).toBe(null);
    expect(doThing.checkBraces({})).toBe(null);
  });
  it('checks to see if its the right answer for matching pair', function() {
    expect(doThing.checkBraces(answer)).toEqual('perfect matching');
  });
  it('checks to see if its the right answer for mixed match pair', function() {
    expect(doThing.checkBraces(answer2)).toEqual('Mixed Matched');
  });
});
