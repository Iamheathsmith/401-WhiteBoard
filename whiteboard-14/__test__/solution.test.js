'use strict';

const SLL = require('../lib/sllBuilder');
const doThing = require('../lib/solution.js');
require('jest');

let testData = new SLL();
testData.insertEnd(1);
testData.insertEnd(1);
testData.insertEnd(2);

let answer = new SLL();
answer.insertEnd(1);
answer.insertEnd(2);

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.dedupe()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.dedupe(1)).toBe(null);
    expect(doThing.dedupe([])).toBe(null);
    expect(doThing.dedupe('test')).toBe(null);
  });
  it('checks to see if its the right answer for matching pair', function() {
    expect(doThing.dedupe(testData)).toEqual(answer);
  });
  it('checks to see if its the right answer for mixed match pair', function() {
    expect(doThing.dedupe(testData)).not.toEqual(testData);
  });
});
