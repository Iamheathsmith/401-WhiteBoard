'use strict';

const findNum = module.exports = {};

findNum.numConst = function(max, maxTwo) {
  this.max = max;
  this.maxTwo = maxTwo;
};

findNum.findOurMax = function(arr) {
  if (!arr || !Array.isArray(arr) || arr.length < 2) return null;
  for (let i in arr) {
    if (typeof arr[i] !== 'number') {
      arr.splice(i,1);
    }
  }
  if (arr.length < 2) return null;
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let maxTwo = Math.max.apply(null, arr);
  let answer = new findNum.numConst(max, maxTwo);
  return answer;
};
