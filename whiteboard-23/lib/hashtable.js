'use strict';


const HashTable = module.exports = function(size = 1024) {
  this.size = size,
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.toString().split('').sort().join('');
  return hash;
};
