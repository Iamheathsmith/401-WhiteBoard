'use strict';


module.exports = new class {

  rotate(arr) {
    if(!arr || !Array.isArray(arr)) return null;
    arr.reverse();
    return arr[0].map((val, i) => arr.map(row => row[i]));
  }

};

