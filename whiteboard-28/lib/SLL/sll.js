'use strict';


const Nd = require('./node');


class SLL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertHead(val) { //Big O is O(1). goes right to the front of the line
    if (!val) return null;
    let nd = new Nd(val);
    nd.next = this.head;
    this.head = nd;
    this.size++;
    return this;
  }

}

module.exports = SLL;
