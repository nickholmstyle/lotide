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
  let newArray = array.slice(1);
  return newArray;

};

const words = ['hello', 'lighthouse', 'labs'];
console.log(tail(words));
console.log(assertEqual(words.length, 3));
console.log(assertEqual(words[0], 'hello'));