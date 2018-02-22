'use strict';


const HashTable = module.exports = function(size = 1024) {
  this.size = size,
  this.memory = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').sort().join('');
  return hash;
};

HashTable.prototype.set = function(key, value) {
  //inplement the collision detection and hangle the thought a SLL

  this.memory[this.hashKey(key)] = value;
};

HashTable.prototype.get = function(key) {
  //implement the loopup for your cuckets and there respective data structures
  
  return this.memory[this.hashKey(key)];
};

HashTable.prototype.remove = function(key) {
  let address = this.hashKey(key);

  return this.memory[address] ? delete this.memory[address] : new Error('Invalid key.');
};