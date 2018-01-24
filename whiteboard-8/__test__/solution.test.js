'use strict';

const doThing = require('../lib/solution.js');
const SLL = require('../lib/sll.js');
require('jest');

let test = new SLL();
test.insertEnd(9);
test.insertEnd(5);
test.insertEnd(7);

let test1 = new SLL();
test1.insertEnd(5);
test1.insertEnd(2);
test1.insertEnd(7);

let answer = {head: { value: 5, next: { value: 7, next: null } } };
let wrong = {head: { value: 7, next: { value: 7, next: null } } };

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findMatch()).toBe(null);
  });
  it('checks to see what was passed in in not a string', function() {
    expect(doThing.findMatch('pizza', test)).toBe(null);
    expect(doThing.findMatch('pizza')).toBe(null);
  });
  it('checks to see if was passed in is not a number', function() {
    expect(doThing.findMatch(173)).toBe(null);
  });
  it('checks to see if its the right answer', function() {
    expect(doThing.findMatch(test, test1)).toEqual(answer);
    expect(doThing.findMatch(test, test1)).not.toEqual(wrong);
  });
});
