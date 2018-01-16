'use strict';

const findNum = require('../solution.js');
require('jest');

describe('#solution module', function() {
  it('look to see if there is anything to pass into the function', function() {
    expect(findNum.findOurMax()).toBe(null);
  })
  it('check to see if its is an empty oject', function() {
    expect(findNum.findOurMax({})).toBe(null);
  })
  it('look to see if the object that is passed is an array', function() {
    expect(findNum.findOurMax('football')).toBe(null);
  })
  it('check to see if the array is longer then 2 numbers', function() {
    expect(findNum.findOurMax([1])).toBe(null);
  })
  it('check to see if all items in the array are numbers', function() {
    expect(findNum.findOurMax([1, 2, 'tree', 4])).toBe(null);
  })
  it('checks and see if the outut is what we wanted', function() {
    expect(findNum.findOurMax([1, 4, 6, 8])).toEqual({max: 8, maxTwo: 6});
  })
})
