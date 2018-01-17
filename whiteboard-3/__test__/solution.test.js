'use strict';

const findPass = require('../lib/solution.js');
require('jest');

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function and should return null', function() {
    expect(findPass.numPass()).toBe(null);
  });
  // it('checks to see if its is an empty oject and should return null', function() {
  //   expect(findPass.findOurMax({})).toBe(null);
  // });
  // it('checks to see if the object that is passed is an array and should return null', function() {
  //   expect(findPass.findOurMax('football')).toBe(null);
  // });
});
