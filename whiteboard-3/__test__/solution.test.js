'use strict';

const findPass = require('../lib/solution.js');
require('jest');

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(findPass.numPass()).toBe(null);
  });
  it('checks to see if object is a object', function() {
    expect(findPass.numPass('string')).toBe(null);
  });
  it('checks to see if what i expect from total', function() {
    expect(findPass.numPass({value: 7, next:{value: 3, next: null}})).toEqual(10);
  });
  it('checks to see if we remove non number value from passengers at the end', function() {
    expect(findPass.numPass({value: 7, next:{value: 'dog', next: null}})).toEqual(7);
  });
  it('checks to see if we remove non number value from passengers', function() {
    expect(findPass.numPass({value: 7, next:{value: 'dog', next:{value: 3, next: null}}})).toEqual(10);
  });
});
