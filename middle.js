const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const middle = function(array) {

  if (array.length === 1 || array.length === 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  }
  if (array.length % 2 === 0) {
    const leftSide = [Math.floor(array.length / 2) - 1];
    const rightSide = [Math.floor(array.length / 2)];
    return [array[leftSide], array[rightSide]];
  }
};


// console.log(middle([1, 2, 3, 8, 9, 9, 78]));

module.exports = middle;



