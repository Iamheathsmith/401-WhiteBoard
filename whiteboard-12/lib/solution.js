'use strict';

const Stack = require('./stackbuilder');
// let run = module.exports = {};


module.exports = class {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    if (!value) return null;
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.size === 0) {
      while (this.inbox.size > 0) {
        this.outbox.push(this.inbox.pop().value);
      }
    }
    return this.outbox.pop();
  }
};

