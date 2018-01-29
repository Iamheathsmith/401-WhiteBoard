'use strict';

const run = require('./lib/solution');


let arr = [1,2,4,5,6,7,8,9,10]; // missing 3
let arr1 = [1,2,4,5,6,7,8,9,10,11,12,14,15,16,18]; // missing 3,13,17
let arr2 = [1,2,4,5,7,8,9,10]; // missing 3,6

let test = process.argv[2];


if (test === '1') {
  console.log(run.findMissingNum(arr));
}
if (test === '2') {
  console.log(run.findMissingNum(arr2));
}
if (test === '3') {
  console.log(run.findMissingNum(arr1));
}