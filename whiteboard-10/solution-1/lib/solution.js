'use strict';

const doThing = module.exports = {};
const Stack = require('./stackbuilder.js');


doThing.checkBraces = function(arr) { //The Big O is O(3n)
  if (!arr|| typeof arr !== 'string') return null;
  let test = new Stack();
  let array = arr.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '{') {
      test.push(array[i]);
    }
    if (array[i] === '}') {
      if (test.size === 0) {
        console.log('Mixed Matched'); 
        return 'Mixed Matched';
      }
      test.pop(array[i]);
    }
  }
  if (test.top === null) {
    console.log('perfect matching');
    return 'perfect matching';
  }
};

