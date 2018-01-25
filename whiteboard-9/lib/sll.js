'use strict';


const Nd = require('./nodeBuilder');


class SLL {
  constructor() {
    this.head = null;
  }

  insertEnd(val) { //Big O is O(1) if just one Node, or O(n) if it has to iterates to find end.
    if (!val) return null;
    let nd = new Nd(val);
    if(!this.head) {
      this.head = nd;
      return this;
    }
    for(var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd;
    return this;
  }

  reverseSLL() { //Big O is O(n). has to iterate over all of it.
    let current, next, prev;
    current = this.head;
    next = null;
    prev = null;
    this.head = null;

    while (!this.head) {
      if (current.next) {
        next = current.next;
      } else {
        next = null;
      }

      if (prev) {
        current.next = prev;
      } else {
        current.next = null;
      }

      prev = current;

      if (next) {
        current = next;
      } else {
        this.head = current;
      }
    }
    return this;
  }
}

module.exports = SLL;
