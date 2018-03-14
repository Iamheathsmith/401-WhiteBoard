'use strict';

const Hash = require('./hashtable');
let hashTable = new Hash();


module.exports = new class {
  doThing(arg) {
    if (!arg || !Array.isArray(arg)) return null;
    let table = {};
    let final = [];

    arg.map(val => {
      let hash = hashTable.hashKey(val);
      table[hash] ? table[hash].push(val) : table[hash] = [val];
    });  
    
    for (let i in table) {
      if (table[i]) {
        final.push(table[i]);
      }
    }
    return final.reduce((a, b) => a.concat(b));
  }
};

