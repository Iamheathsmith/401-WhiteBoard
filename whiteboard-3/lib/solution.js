'use strict';

const findPass = module.exports = {};



findPass.numPass = function(arr) {
  let car = arr;
  let total = 0;
  while (car.next) {
    total += car.value;
    car = car.next;
    findPass.numPass(car);
  }
  total += car.value;
};
