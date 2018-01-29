'use strict';

const doThing = module.exports = {};


let arr2 = [1,2,4,5,7,8,9,10,15,13,12,14];


doThing.findMissingNum = function(arr) { //The Big O is O(n)
  if(!arr || !Array.isArray(arr)) return null;
  arr.sort((function(a, b) {return a - b;}));
  let missing = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i+1] - arr[i]) > 1) {
      missing.push(arr[i+1] - 1);
    }
  }
  return missing;
};
