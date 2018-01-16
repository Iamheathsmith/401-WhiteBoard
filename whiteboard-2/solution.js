'use strict';

let arr = [1, 5, 16, 66, 77, 189, 256];


var findOurMax= function() {
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let max2 = Math.max.apply(null, arr);
  return {max, max2};
};

findOurMax(arr)
