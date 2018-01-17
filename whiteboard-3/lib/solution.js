'use strict';

const findPass = module.exports = {};



findPass.numPass = function(engine) {
  if (!engine || typeof engine !== 'object') return null;
  let car = engine;
  let total = 0;
  while (car.next) {
    if (typeof car.value !== 'number') {
      car.value = 0;
    }
    total += car.value;
    car = car.next;
    findPass.numPass(car);
  }
  if (typeof car.value !== 'number') {
    car.value = 0;
  }
  total += car.value;
  return total;
};
