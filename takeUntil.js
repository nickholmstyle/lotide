const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if(callback(element)) {
      return results;
    }
    results.push(element);
  }  
}

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }  
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2])
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])

module.exports = takeUntil;



// const takeUntil = function(array, callback) {
//   const results = [];
//   for (let i = 0; i < array.length; i++) {
//     if(callback(array[i])) {
//       return results;
//     }
//     results.push(array[i]);
//   }  
// };


// const takeUntil = function(array, callback) {
//   const results = [];
//   for (let element of array) {
//     if (callback(element)) {
//     return results
//     } else {
//       results.push(element)
//     }
//   }
// };




