'use strict';

const thing = module.exports = function(arr) {
  if(!arr || typeof arr !== 'number' || !Number.isInteger(arr)) return null;
  if (arr <= 2) return 1;
  
  return thing(arr - 1) + thing(arr - 2);
};