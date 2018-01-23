'use strict';

const doThing = require('../lib/solution.js');
require('jest');

let obj = {head: {value: 1, next: {value: 3, next: {value: 6, next: null}}}};
let obj2 = {head: {value: 1, next: {value: 3, next: this.head}}};

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.testNode()).toBe(null);
  });
  it('checks to see what was passed in in not a string', function() {
    expect(doThing.testNode('pizza')).toBe(null);
  });
  it('checks to see if was passed in is not a number', function() {
    expect(doThing.testNode(173)).toBe(null);
  });
  it('checks to see if it finds the end of of a SLL', function() {
    expect(doThing.testNode(obj)).toBe(false);
  });
  it('checks to see if the SLL is circular', function() {
    expect(doThing.testNode(obj2)).toBe(true);
  });
});
