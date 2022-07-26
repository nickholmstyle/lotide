const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

const tail = function(array) {
  let newArray = array.shift();
  return newArray;

};

const words = [1, 2, 3, 4];
console.log(tail(words));
console.log(assertEqual(words.length, 3));