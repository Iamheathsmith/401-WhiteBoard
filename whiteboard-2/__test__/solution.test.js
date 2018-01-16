'use strict';

const findNum = require('../lib/solution.js');
require('jest');

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function and should return null', function() {
    expect(findNum.findOurMax()).toBe(null);
  });
  it('checks to see if its is an empty oject and should return null', function() {
    expect(findNum.findOurMax({})).toBe(null);
  });
  it('checks to see if the object that is passed is an array and should return null', function() {
    expect(findNum.findOurMax('football')).toBe(null);
  });
  it('checks to see if the array is longer then 2 numbers and should return null', function() {
    expect(findNum.findOurMax([1])).toBe(null);
  });
  it('checks to see if all there is more then 2 numbers in the array return the 2 highest', function() {
    expect(findNum.findOurMax([1, 2, 'tree', 4])).toEqual({max: 4, maxTwo: 2});
  });
  it('checks to see if the array has 2 numbers if not return null', function() {
    expect(findNum.findOurMax([1])).toBe(null);
  });
  it('checks and see if the outut is what we wanted', function() {
    expect(findNum.findOurMax([1, 4, 6, 8])).toEqual({max: 8, maxTwo: 6});
  });
  it('checks and see if there are duplicates and only return the higest', function() {
    expect(findNum.findOurMax([1, 1, 8, 8])).toEqual({max: 8, maxTwo: 8});
  });
});
