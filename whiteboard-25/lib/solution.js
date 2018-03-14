'use strict';

module.exports = new class {
  fib(arr){
    if(!arr || typeof arr !== 'number' || !Number.isInteger(arr)) return null;
    let indexVal = 0, total = 0, temp;
  
    while (arr >= 0){
      temp = indexVal;
      indexVal = indexVal + total;
      total = temp;
      if(total === 0) {
        indexVal = 1;
      }
      arr--;
    }
    return total;
  }
};
