'use strict';

const Hash = require('./hashtable')

module.exports = new class {
  findMatch(arr1, arr2) {
    if (!arr1 || !arr2 ) return null;
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
    let test = [];
    let test2 = [];
    let hash = new Hash(5)
    for (let i = 0; i < arr1.length; i++) {
      let index = hash.hashKey(arr1[i]);
      test.push(index);
      }
    for (let i = 0; i < arr2.length; i++) {
      let index2 = hash.hashKey(arr2[i]);
      test2.push(index2);
    }
    
    let temp = test.filter((n) => test2.includes(n));
    let final = temp.filter((val, i, final) => {
      if (final.indexOf(val) === i) {
        return val
      }
    })
    if (final.length < 1 ) return 'no matching pairs';

    return final;

  };
}