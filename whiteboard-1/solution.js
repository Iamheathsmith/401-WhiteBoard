'use strict'

function test(num) {
  let max = Math.max(...num);
  let min = Math.min(...num);
  let step1 = num.reduce((prev, curr) => prev + curr );
  let avg = step1/num.length;
  return {max, min, avg}
}

let numArray = [1,3,7,9];
test(numArray)
