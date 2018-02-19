'use strict';


module.exports = new class {

  map(arr, cb) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string' || !cb) return null;
    const result = [];
    for (let i = 0; i < arr.length; i++) {      
      result.push(cb(arr[i]));
    }
    return result;
  }

  filter(arr, cb) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string' || !cb) return null;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  reduce(arr, cb, initVal) {
    if(!arr || !Array.isArray(arr) || typeof arr === 'string') return null;
    let result = initVal;
    let newArr = new Array(...arr);
    for (let i = 0; i < newArr.length; i++) {
      result += cb(newArr[i]);
    }
    return result;
  }
};
