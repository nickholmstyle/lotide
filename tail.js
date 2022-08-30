
// const assertEqual = require('./assertEqual.js')
const tail = function(array) {
  const newArr = array.slice(1);
  console.log(typeof newArr)
  return newArr;
};

tail([1, 2, 3])
module.exports = tail;
