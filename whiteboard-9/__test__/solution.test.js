'use strict';

const doThing = require('../lib/solution.js');
const SLL = require('../lib/sll.js');
require('jest');

let test = new SLL();
test.insertEnd(9);
test.insertEnd(5);
test.insertEnd(7);


let answer = { value: 7, next: null };
let answer2 = { value: 5, next: { value: 7, next: null } };

describe('#solution module', function() {
  it('checks to see if there is anything to pass into the function', function() {
    expect(doThing.findNthNodeFromEnd()).toBe(null);
  });
  it('checks to see if the right items are passed in.', function() {
    expect(doThing.findNthNodeFromEnd('pizza', test)).toBe(null);
    expect(doThing.findNthNodeFromEnd('pizza')).toBe(null);
    expect(doThing.findNthNodeFromEnd(1, 'pizza')).toBe(null);
  });
  it('checks to see if its the right answer', function() {
    expect(doThing.findNthNodeFromEnd(1, test)).toEqual(answer);
    expect(doThing.findNthNodeFromEnd(2, test)).toEqual(answer2);
  });
  it('checks to see if its the right answer', function() {
    expect(doThing.findNthNodeFromEnd(2, test)).not.toEqual(answer);
  });
});
