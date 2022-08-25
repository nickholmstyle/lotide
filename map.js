const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item))
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["see", "you", "never"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);
const results3 = map(words, word => word[1]);
const results4 = map(words1, word => word[0]);

// console.log(results1);
// console.log(results2);

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
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
};

assertArraysEqual(results1, results4)