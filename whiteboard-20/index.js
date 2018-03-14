'use strict';

const run = require('./lib/solution');

let test = [1, 3, 5, 7, 9];

let cb = function(arg) {
  let result;
  result = arg * 2;
  return result;
};

let cbFil = function(arg) {
  let result;
  result = arg >= 5;
  return result;
};


if(process.argv[2] === 'map') {
  console.log(`take ${test} and doubles it`, run.map(test, cb));
}

if(process.argv[2] === 'filter') {
  console.log(`take ${test} and finds only items 5 or higher`, run.filter(test, cbFil));
}

if(process.argv[2] === 'reduce') {
  console.log(`take ${test} and doubles it and then adds them all together`, run.reduce(test, cb, 0));
}