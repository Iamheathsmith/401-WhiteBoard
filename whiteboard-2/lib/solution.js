'use strict';

const findNum = module.exports = {};

// let arr = [1, 5, 16, 66, 77, 189, 256];

findNum.findOurMax= function(arr) {
  if (!arr || !Array.isArray(arr) || arr.length > 2) return null;
  for (let i in arr) {
    if (typeof arr[i] !== 'number') {
      return null;
    }
  }
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let maxTwo = Math.max.apply(null, arr);
  return {max, maxTwo};
};
