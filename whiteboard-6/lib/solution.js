'use strict';

const doThing = module.exports = {};


doThing.loop = function(val, callback) {
  if(!val || val < 1 ||typeof val !== 'number') return null;
  let testVal = Math.ceil(val);
  let counter = 0;
  if(typeof testVal === 'number') {
    for(let i = counter; i < testVal; i++) {
      console.log('i have ran ' + counter + ' times');
      counter++;
    }
    console.log('i have ran a total of ' + counter + ' times');
    return counter;
  }
  callback(null);
  doThing.loop(testVal, callback);
};
