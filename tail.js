
const assertEqual = require('./assertEqual.js')

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;

};

module.exports = tail
