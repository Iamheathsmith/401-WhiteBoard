'use strict';

module.exports = new class {
  mathStuff(arr, arr2) {
    if(!arr || !arr2 || typeof arr !== 'number' || typeof arr2 !== 'number' || !Number.isInteger(arr) || !Number.isInteger(arr2)) return null;
    let large = Math.pow(arr, arr2);
    large = large.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    return large;
  }
};
