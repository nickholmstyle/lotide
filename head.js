const assertEqual = require('./assertEqual.js');


// const head = function (array) {
//   newElement= array[0];
//   return newElement;

// };

const head = function (array) {
  newElement = array.shift();
  return newElement;

};

module.exports = head

