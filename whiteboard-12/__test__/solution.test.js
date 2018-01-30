'use strict';

const doThing = require('../lib/solution.js');
require('jest');


describe('#solution module', function() {
  it('checks to see if anything is passed into the enqueue() function', function() {
    let test = new doThing();
    test.enqueue();
    expect(test.enqueue()).toBe(null);
  });
  it('checks to see if we get the right stack size when we add and remove.', function() {
    let test = new doThing();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.dequeue();
    expect(test.outbox.size).toBe(2);
    expect(test.inbox.size).toBe(0);
  });
  it('checks to see if the right value is in the outbound stack and the inbox stack in empty.', function() {
    let test = new doThing();
    test.enqueue(1);
    test.enqueue(2);
    test.enqueue(3);
    test.dequeue();
    expect(test.outbox.top.value).toBe(2);
    expect(test.inbox.top).toBe(null);
  });
});
