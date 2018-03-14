'use strict';



module.exports = new class {
  isMatched(arr, arr2) {
    if(!arr || !arr || typeof arr === 'string' || typeof arr2 === 'string') return null;
    arr.inOrderTraversal();
    arr2.inOrderTraversal();
    
    if (arr.match.toString() !== arr2.match.toString()) {
      return false;
    } else {
      return true;
    }
  }
};

